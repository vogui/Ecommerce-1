import React from 'react'
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Input } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    
    inputRoot: {
      color: "inherit",
    },
    inputUser: {
      color: "white",
    },
    inputInput: {
         backgroundColor: 'gray',
         borderBlockColor: 'black',
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          width: "13ch",
          "&:focus": {
            width: "20ch",
          },
        }
    },
    search: {
        position: "relative",
        marginRight: "15px",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          marginLeft: theme.spacing(1),
          width: "auto",
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
   
  }));

export default ({handleCategorys, setCategoryState, setUrl, setPrice, setName, valueUrl, valueName, valuePrice, handleSubmitCreate, valueId, setId ,handleSubmitDelete}) =>{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();



    const handleClose = (category) => {
        console.log("Category en Input:", category);
       setCategoryState(category)
      };

    const closeBox = () => {
        setAnchorEl(null);
      };
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };

    return(
        <>
        <h1><strong>Create Product</strong></h1>
        <form onSubmit={handleSubmitCreate}> 
            <Input
              value={valueUrl}
              onChange={setUrl}
              placeholder="Url"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
            <br/>
            <br/>
           
            <Input
              value={valueName}
              onChange={setName}
              placeholder="Search for Name"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
            
            <br/>
            <br/>
        
            <Input
              value={valuePrice}
              onChange={setPrice}
              placeholder="Search for Price"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
            
            <br/>
            <br/>
            <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              Category
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={closeBox}
            >
              {handleCategorys &&
                handleCategorys.map((category) => {
                  return (
                    <div key={category.id}>
                      <MenuItem
                        onClick={() => {
                          handleClose(category.id);
                        }}
                      >
                        {category.name}
                      </MenuItem>
                    </div>
                  );

                  /*(category.id)*/
                })}
            </Menu>
            <br/>
            <br/>
            <button type="submit">Crear</button>
        </form>
        <br/>
        <br/>
        <Divider />
        <br/>
        <br/>
       <h1>Delete Product</h1>
        <form  onSubmit={handleSubmitDelete} >
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>

            <Input
              value={valueId}
              onChange={setId}
              placeholder="id of the product to remove"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <button type = 'submit'> Delete </button>
        </form>

        </>
    )
}