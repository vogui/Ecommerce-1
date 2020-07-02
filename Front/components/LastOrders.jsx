import React from "react";
// import NavBar from "../components/NavBar";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import Snackbar from "@material-ui/core/Snackbar";
// import MuiAlert from "@material-ui/lab/Alert";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: "100%",
//   },
// });

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

export default ({ orders }) => {

  return (
  <div>
    <h3>Your Last Orders: </h3>
    <div> 
    {orders.map((order) => {

              <GridListTile key={order.id}>
                Order #: order.id
                <GridListTileBar
                  title={<span>Address: {order.adress}</span>}
                  subtitle={<span>Total: {order.total}</span>} 
                />
              </GridListTile>
      })}
    </div>
  </div>
)}
