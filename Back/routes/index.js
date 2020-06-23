const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const session = require('express-session'); 
const express = require('express');


const router = express.Router();

/* ------------CONFIG PASSPORT -----------*/
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password' });
      }
      return done(null, user); // the user is authenticated ok!! pass user to the next middleware in req object (req.user)
    });
  }
));

app.use(session({ secret: "tomate1" })) // req.session // The secret is used to sign the session id cookie, to prevent the cookie to be tampered with.
app.use(passport.initialize());
app.use(passport.session());

// serialize: how we save the user and stored in session object by express-session
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// deserialize: how we look for the user
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

//---------- MIDDLEWARE isLogedIn: check if the user is logged
function isLogedIn(req, res, next) {
    if (req.isAuthenticated()) {
        console.log("ESTA AUTENTICADO!") // passport method that check if a user is authenticated or not
        next();
    } else {
        res.redirect('/login');
    }
}

//---------- INICIO DE RUTAS

router.get('/', (req, res) => {
    console.log("---------------------------")
    console.log("req.session: ", req.session) // express-session
    console.log("req.sessionID: ", req.sessionID) // express-session
    console.log("req.cookies: ", req.cookies) // cookie-parser
    console.log("req.user:", req.user)
    console.log("---------------------------")
});


module.exports = router;