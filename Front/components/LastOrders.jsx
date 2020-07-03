import React, { Fragment } from 'react';
import { connect } from "react-redux";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import NavBar from "../components/NavBar";
import Table from '@material-ui/core/Table';


const mapStateToProps = (state) => {
  return {
    orders: state.products.lastOrders,
    login: state.login.data,
    isAdmin: state.login.data.dataUser.isAdmin
  };
}

class Table1 extends React.Component {
   constructor() {
      super()
      this.state = { 
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
               <td>ORDER # </td>
               <td>DATE</td>
               <td>TOTAL $</td>
            </tr>
            <tr>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>{order.total}</td>
            </tr>
            List Products:
            <tr>
              <td>PRODUCT NAME</td>
              <td>QTY</td>
            </tr>
              {
              order.Products.map((item) => {
              console.log("item", item)
              return (
              <tr key={item.id}>
                  <td key={item.id}>{item.title}</td>               
                  <td>{item.quantity} </td>  
              </tr>
              )})}
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

export default connect(mapStateToProps)(Table1);

