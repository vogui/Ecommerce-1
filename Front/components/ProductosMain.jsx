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
//import { addToCart } from "./store/actions/Products";

const useStyles = makeStyles((theme) => ({
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

const mapStateToProps = function (state, ownProps) {
  return {
    product: state.products.product,
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {};

function ProductosMain({ tileData }) {
  const classes = useStyles();
  /*   handleClick = (id) => {
    this.props.addToCart(id);
  }; */
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
                <img src={tile.picture} />
                <GridListTileBar
                  title={tile.title}
                  subtitle={<span>Price: {tile.price}</span>}
                  actionIcon={
                    <div>
                      <AddShoppingCartSharpIcon
                        className={classes.icon}
                        aria-label={`info about ${tile.title}`}
                        onClick={() => add(item.id)}
                      ></AddShoppingCartSharpIcon>

                      <Link to={`/product/${tile.id}`}>
                        <InfoIcon className={classes.icon} />
                      </Link>
                    </div>
                  }
                />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductosMain);
