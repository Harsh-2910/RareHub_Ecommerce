import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme)=>({
    toolbar: theme.mixins.toolbar,
    footer1:{
      textAlign:'center',
      justifyContent:'center',
    },
    content:{
        paddingTop:"30px",
        backgroundColor:'#F8485E',
        paddingBottom:"30px",
        background: `linear-gradient(to top right,#f09,#f09,#a960ee,#0ff,#3023AE,#3023AE)`,
    },
    icon: {
        display: 'flex',
        height: '70%',
        width: "auto",
        align: "center",
        margin: "0.5rem"
    
    },
    anchor: {
        textDecoration: "none",
        color: "black",
        underline: "none",
    },
}));