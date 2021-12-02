import React from 'react';
import { Typography,Grid,CssBaseline } from '@material-ui/core';
import Background from '../../Images/bg.png';
import useStyles from './styles';
import img1 from '../../Images/img1.jpg';
import img2 from '../../Images/img2.jpg';
import logo from '../../Images/webshop.png'


const Header = () => {
    const classes  = useStyles();
    return (
        <div className={classes.content} >
            <CssBaseline />
            <div className={classes.toolbar}/>
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                <Grid item xs={6} sm={6} md={3}>
                    <img height="320px" width="100%" src={img1}/>
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                   <img height="320px" width="100%" src={img2}/>
                </Grid>
                <Grid item md={3} lg={3}>
                    <img className={classes.logo} src={logo}/>
                    <Typography className={classes.brandName} variant="h1">RareHub</Typography>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Header
