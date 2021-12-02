import React from 'react';
import {AppBar,Toolbar , IconButton , Badge, MenuItem ,Menu,Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import logo from '../../Images/webshop.png'
import useStyles from './styles'
import {Link,useLocation} from 'react-router-dom'

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <div style={{ position:"fixed" }}>
           <AppBar  className={classes.appBar} color='inherit'>
               <Toolbar>
                   <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                      <img src={logo} alt="Commerce.js" height= "25px" className={classes.image}/>
                      RareHub
                   </Typography>
                   <div className= {classes.grow}/>
                   {location.pathname==="/" && (
                   <div className={classes.button}>
                     <IconButton component={Link} to="/cart" aria-label="show cart item" color="inherit">
                       <Badge badgeContent={totalItems} color="secondary">
                         <ShoppingCart/>
                       </Badge>
                     </IconButton>
                   </div>)}
               </Toolbar>
           </AppBar>
            
        </div>
    )
}

export default Navbar
