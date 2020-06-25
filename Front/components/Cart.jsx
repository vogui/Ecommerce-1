import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));



export default function InteractiveList({items,add,rest,remove}) {
  const classes = useStyles();
  const [secondary, setSecondary] = React.useState(false);

  function generate(element) {
      return items.map((product) =>{
        {console.log("esto es el el product : ",product)}

        React.cloneElement(element, {
          key: product,
        })
      }
      );
    }

  return (
    <div> 
      {items !== undefined ? (
        <div className={classes.root}>
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
              <Grid product xs={12} md={6}>
              <Typography variant="h6" className={classes.title}>
                Your Products:
              </Typography>
              <div className={classes.demo}>

                <List >
                  { items.map((item)=>
                      (
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        secondary={secondary ? item.picture : null}
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={()=>remove(product.id)}>
                          <RemoveShoppingCartIcon />
                        </IconButton>
                        <IconButton edge="end" aria-label="+1" onClick={()=>add(product.id)}>
                          <ExposurePlus1Icon />
                        </IconButton>
                        <IconButton edge="end" aria-label="-1" onClick={()=>rest(product.id)}>
                          <ExposureNeg1Icon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
                {/*( <p>Nothing yet...</p>  )*/}
              </div>
            </Grid>
        </div>
        )
        :
        ( <p>Nothing yet...</p>)
      }
    </div>
  );
}