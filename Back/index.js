const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const path = require("path");
const volleyball = require("volleyball");
const db = require("./db");
const User = require("./models/User");
app.use(session({ secret: "tomate1" })); // req.session // The secret is used to sign the session id cookie, to prevent the cookie to be tampered with.
app.use(passport.initialize());
app.use(passport.session());
app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

/* ------------CONFIG PASSPORT -----------*/
passport.use(
  new LocalStrategy(
    {
      usernameField: "email", // input name for username
      passwordField: "password", // input name for password
    },
    function (usernameField, passwordField, done) {
      console.log("email y password", usernameField, passwordField);
      User.findOne({ email: usernameField }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: "Incorrect username" });
        }
        if (!user.validPassword(passwordField)) {
          return done(null, false, { message: "Incorrect password" });
        }
        return done(null, user); // the user is authenticated ok!! pass user to the next middleware in req object (req.user)
      });
    }
  )
);

// serialize: how we save the user and stored in session object by express-session
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// deserialize: how we look for the user
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

//---------- MIDDLEWARE isLogedIn: check if the user is logged
function isLogedIn(req, res, next) {
  if (req.isAuthenticated()) {
    console.log("ESTA AUTENTICADO!"); // passport method that check if a user is authenticated or not
    next();
  } else {
    res.redirect("/login");
  }
}

//---------- INICIO DE RUTAS

app.use("/api", routes);
app.get("/", (req, res) => {
  console.log("---------------------------");
  console.log("req.session: ", req.session); // express-session
  console.log("req.sessionID: ", req.sessionID); // express-session
  console.log("req.cookies: ", req.cookies); // cookie-parser
  console.log("req.user:", req.user);
  console.log("---------------------------");
});

db.sync({ force: false })
  .then(() => {
    console.log("DB synched");
    app.listen(3000, () => console.log("listening on 3000"));
  })
  .catch(console.log);

module.exports = app;
