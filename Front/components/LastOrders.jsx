import React from "react";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

export default ({ orders }) => {

  return (
  <div>
    <h3>Your Last Orders: </h3>
    <div> 
    {console.log("ORDERS!!!", orders)}
    {orders.map((order) => {
              return (<GridListTile key={order.id}>
                Order #: 
                { 
                  order.Products.map((product) =>{
                   return
                  (<GridListTileBar
                  title={<span>Address: {product.title}</span>}
                  subtitle={<span>Total: {product.price}</span>} 
                />)
                  })
                }
              </GridListTile>
      )})}
    </div>
  </div>
)}
