import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    logo:{
        // padding: theme.spacing(4),
        marginLeft: "150px",
        marginTop: "10px",
        transform : "translateX(-64px)",
        height:"100%",
        width:"80%",
        [theme.breakpoints.down('sm')]:{
          display:"none"
        },
    },
    brandName:{
        fontFamily: "Road Rage",
        [theme.breakpoints.down('sm')]:{
            padding: theme.spacing(2),
            align:"center",
            marginLeft:"0px",
        },
        marginLeft: "130px",
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        background: `linear-gradient(to top right,#f09,#f09,#a960ee,#0ff,#3023AE,#3023AE)`,
    },
}));