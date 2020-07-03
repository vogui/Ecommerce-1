
/*
=======
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import Collapse from '@material-ui/core/Collapse';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
// import StarBorder from '@material-ui/icons/StarBorder';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
//   nested: {
//     paddingLeft: theme.spacing(4),
//   },
// }));


// // export default ({ orders }) => {

// //   return (
// //   <div>
// //     <h3>Your Last Orders: </h3>
// //     <div> 
// //       {console.log("ORDERS!!!", orders)}
// //       {orders.map((order) => (



        
// //         <ListItem key={order.id}>
// //         Total  {order.total}
// //         {order.Products.map((producto) => (
        
// //           <ListItemText key={producto.id} primary={producto.title}/>
// //             // <ListItemSecondaryAction>
// //             // Price=$ {producto.price}
// //             // </ListItemSecondaryAction>
// //             )
// //         )}
// //         </ListItem>
// //         ))}
// //     </div>
// //   </div>
// // )}


// export default ({ orders }) => {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(true);

//   const handleClick = () => {
//     setOpen(!open);
//   };

//   return (
//     <List
//       component="nav"
//       aria-labelledby="nested-list-subheader"
//       subheader={
//         <ListSubheader component="div" id="nested-list-subheader">
//           Purchase History:
//         </ListSubheader>
//       }
//       className={classes.root}
//     >
//       <ListItem button onClick={handleClick}>
//         <ListItemIcon>
//           <InboxIcon />
//         </ListItemIcon>
//          {orders.map((order) => (
//         <ListItemText key={order.id} primary={order.date} />
//         {open ? <ExpandLess /> : <ExpandMore />}
//         ))}
//       </ListItem>
//       <Collapse in={open} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//         {order.Products.map((producto) => (
//           <ListItem button className={classes.nested}>
//             <ListItemIcon>
//               <StarBorder />
//             </ListItemIcon>
//             <ListItemText primary={producto.title} />
//           </ListItem>
//           ))}
//         </List>
//       </Collapse>
//     </List>
//   );
// }
*/
