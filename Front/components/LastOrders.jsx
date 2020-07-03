import React, { Fragment } from 'react';
import { connect } from "react-redux";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import NavBar from "../components/NavBar";

const mapStateToProps = (state) => {
  return {
    orders: state.products.lastOrders,
    login: state.login.data,
    isAdmin: state.login.data.dataUser.isAdmin
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
        { 
         const { id, date, total } = order 
         console.log("ORDERMAP", order)
      
         return (
            <Fragment>
            <tr key={order.id}>
               <td>ID: {order.id}</td>
               <td>DATE: {order.date}</td>
               <td>TOTAL: $ {order.total}</td>
            </tr>

            <tr >
            {
              order.Products.map((item) => {
              console.log("item", item)
              return (
                <td>Products: $ {item.title}</td>          
              )
            }
              )}
            </tr>
            </Fragment>
            )}           
            
        })
      }

  render() {
    
    return (    
      <div>
        <NavBar props={this.props}/>
        <Box bgcolor="success.main">
           <h1 id='title'>Purchase History</h1>
            <table id='students'>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
        </Box>
       </div> 
      )
   }
}

export default connect(mapStateToProps)(Table);

