import React from "react";
import NavBar from "../components/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
});
export default ({ product, props }) => {
  const classes = useStyles();
  function checkBuy() {}
  return (
    <div>
      <NavBar props={props} />
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
                <Button size="small" color="primary" onClick={() => checkBuy()}>
                  Buy
                </Button>
              </CardActions>
            </Card>
          </div>
        ) : (
          <h5> Loading</h5>
        )}
      </div>
    </div>
  );
  //vendrian las reviews
};
