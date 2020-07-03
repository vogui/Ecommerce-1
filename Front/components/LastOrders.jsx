import React from 'react';
import { connect } from "react-redux";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const mapStateToProps = (state) => {
  return {
    orders: state.products.lastOrders,
  };
}


class Table extends React.Component {
   constructor() {
      super() //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
      }
   }

   renderTableData() {
      return this.props.orders.map((order, index) => {
        // { order.map((item) => {
        //  let productos = new Array();
        //  productos.push(item)})
        // }
         const { id, date, total } = order 
         console.log("ORDERMAP", order)
         return (
            <tr key={id}>
               <td>ID: {order.id}</td>
               <td>DATE: {order.date}</td>
               <td>TOTAL: $ {order.total}</td>
            </tr>

            // {for (let j = 0; j < productos.length; j++) {
            //   let count = 0;
            //   return(
            //     <tr >
            //       <td>Products: $ {productos[count].title}</td>
            //     </tr>
            //   )
            //   count++;}
            // }
            )}           
            )
        }

  render() {
    
    return (    
        <Box bgcolor="success.main">
           <h1 id='title'>Purchase History</h1>
            <table id='students'>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
        </Box>
      )
   }
}

export default connect(mapStateToProps)(Table);