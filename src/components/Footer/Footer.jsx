import React from 'react';
import { Grid,Icon } from '@material-ui/core';
import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.toolbar}/>
            <div className={classes.content}>
               <Grid container direction="row" justifyContent="center" alignContent="center" spacing={3}>
                   <Icon className={classes.icon}>
                    <a href="https://twitter.com/" className={classes.anchor}>
                    <i class="fab fa-twitter"></i>
                    </a>
                   </Icon>
                    
                    <Icon className={classes.icon}>
                     <a href="https://www.facebook.com/" className={classes.anchor}>
                     <i class="fab fa-facebook"></i>
                     </a>
                    </Icon>

                    <Icon className={classes.icon}>
                     <a href="https://www.instagram.com/" className={classes.anchor}>
                     <i class="fab fa-instagram-square"></i>
                     </a>
                    </Icon>
                    
                    <Icon className={classes.icon}>
                     <a href="https://web.telegram.org/z/" className={classes.anchor}>
                     <i class="fab fa-telegram-plane"></i>
                     </a>
                    </Icon>
               </Grid>
                <div className={classes.footer1}>
                 <p>© Copyright 2021 RareHub</p>
                 <article>This website is created as a <strong>Frontend Project only</strong></article>
                </div>
            </div>
        </div>
    )
}

export default Footer
