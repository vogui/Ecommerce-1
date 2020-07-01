import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default ({ product, props }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <div className="productoIndividual">
        {product ? (
          <div className="product">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="100%"
                  src={product.picture}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Aca va una descripcion. Price:{product.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleClick()}
                >
                  Buy
                </Button>
              </CardActions>
            </Card>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
              {props.login.redirect ? (
                <Alert severity="warning" onClose={handleClose}>
                  This feature is going to be able soon!
                </Alert>
              ) : (
                <Alert severity="error" onClose={handleClose}>
                  You are not loggin
                </Alert>
              )}
            </Snackbar>
          </div>
        ) : (
          <h5> Loading</h5>
        )}
      </div>
    </div>
  );
  //vendrian las reviews
};
