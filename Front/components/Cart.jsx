import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import ExposurePlus1Icon from "@material-ui/icons/ExposurePlus1";
import ExposureNeg1Icon from "@material-ui/icons/ExposureNeg1";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import NavBar from "../components/NavBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  fab: {
    margin: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function InteractiveList({
  items,
  add,
  rest,
  remove,
  total,
  props,
}) {
  const classes = useStyles();
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div>
      <NavBar props={props} />
      {items !== undefined ? (  
        <div className={"cart"}>
          {props.login.redirect ? ( 
            <h2>Welcome {props.login.dataUser.name}, this is your Cart</h2>
          ) 
          : 
          null}

          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={secondary}
                  onChange={(event) => setSecondary(event.target.checked)}
                />
              }
              label="Enable secondary text"
            />
          </FormGroup>

          <Grid container spacing={0} direction="column" justify="center">
            <Typography variant="h6" className={classes.title}>
              Your Products:
            </Typography>
            <div className={classes.demo}>
              <List xs={10} md={7}>
                {items.map((item) => (
                  <ListItem key={item.id}>
                    <ListItemAvatar>
                      <Avatar src={item.picture}></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      secondary={secondary ? item.picture : null}
                      primary={item.title}
                    />
                    <ListItemSecondaryAction>
                      <Tooltip title="One More" aria-label="One More">
                        <Fab
                          color="primary"
                          
                          className={classes.fab}
                          onClick={() => add(item.id)}
                        >
                          <ExposurePlus1Icon />
                        </Fab>
                      </Tooltip>
                      <Tooltip title="One Less">
                        <Fab
                          color="secondary"
                          
                          className={classes.fab}
                          onClick={() => rest(item.id)}
                        >
                          <ExposureNeg1Icon />
                        </Fab>
                      </Tooltip>
                      <IconButton edge="end" aria-label="qty">
                        Let´s Drink: {item.quantity}
                      </IconButton>
                      <Tooltip title="Delete">
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => remove(item.id)}
                        >
                          <RemoveShoppingCartIcon />
                        </IconButton>
                      </Tooltip>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
              {/*( <p>Nothing yet...</p>  )*/}
            </div>
          </Grid>
          <Grid>
            <Paper xs={12} className={classes.paper}>
              {" "}
              Total: ${total}
            </Paper>
          </Grid>
        </div>
      ) : (
        <p>Nothing yet...</p>
      )}
    </div>
  );
}
