import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartSharpIcon from "@material-ui/icons/AddShoppingCartSharp";
import InfoIcon from "@material-ui/icons/Info";
import Product from "../components/Product";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
const useStyles = makeStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
  photo: {
    maxHeight: 500,
    margin: "0 auto",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "80%",
    height: "100%",
  },
  icon: {
    marginRight: 15,
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function ProductosMain({ tileData, addToCart }) {
  const classes = useStyles();
  /*   handleClick = (id) => {
    this.props.addToCart(id);
  }; */
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
  console.log('tile ----------->', tileData);
  return (
    <div>
      {tileData != undefined ? (
        <div className={classes.root}>
          <GridList cellHeight={350} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: "500" }}>
              <ListSubheader component="div">Products</ListSubheader>
            </GridListTile>
            {tileData.map((tile) => (
              <GridListTile key={tile.picture}>
                <img src={tile.picture} className={classes.photo} />
                Cantidad:
                <GridListTileBar
                  title={tile.title}
                  subtitle={<span>Price: {tile.price}</span>}
                  actionIcon={
                    <div>
                      <AddShoppingCartSharpIcon
                        className={classes.icon}
                        aria-label={`info about ${tile.title}`}
                        onClick={() => {
                          handleClick(), addToCart(tile.id, /* {
                            quantity: ,
                            price: ,
                            UserId: ,
                            adress: ,
                            productId: tile.id
                          } */);
                        }}
                      ></AddShoppingCartSharpIcon>
                      <Link to={`/product/${tile.id}`}>
                        <InfoIcon className={classes.icon} />
                      </Link>
                    </div>
                  }
                />
                <Snackbar
                  open={open}
                  autoHideDuration={2000}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} severity="success">
                    Product added to the cart!
                  </Alert>
                </Snackbar>
              </GridListTile>
            ))}
          </GridList>
        </div>
      ) : (
        <p>Cargando informacion...</p>
      )}
    </div>
  );
}

export default ProductosMain;
