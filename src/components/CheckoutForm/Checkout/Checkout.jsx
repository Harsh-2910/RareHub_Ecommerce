import React, { useState,useEffect } from 'react';
import { Paper,Stepper,Step,StepLabel,Typography,CircularProgress,Divider,Button,Toolbar,CssBaseline } from '@material-ui/core';
import useStyles from './styles';
import { commerce } from '../../../lib/commerce';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import {Link,useNavigate} from 'react-router-dom';

const steps = ['Shipping address','Payment details']

const Checkout = ({ cart,order,onCaptureCheckout,error }) => {
    const [activeStep,setActiveStep] = useState(0);
    const [checkoutToken,setCheckoutToken] =  useState(null);
    const [shippingData,setShippingdata] = useState({});
    const [isFinished,setIsFinished] = useState(false);
    const classes = useStyles();
    const navigate = useNavigate();

    useEffect(() => {
      const generateToken = async() => {
        try {
          const token = await commerce.checkout.generateToken(cart.id,{type:'cart'});
          setCheckoutToken(token);
        } catch (error) {
          console.log(activeStep, steps.length);
          if (activeStep !== steps.length)
          navigate('/');
        }
      }
      generateToken();
    }, [cart]);

    const nextStep = () => setActiveStep((prevActiveStep)=> prevActiveStep+1);
    const backStep = () => setActiveStep((prevActiveStep)=> prevActiveStep-1);

    const next = (data) => {
       setShippingdata(data);
       nextStep();
    }

    const timeout = () =>{
      setTimeout(() =>{
        setIsFinished(true);
      },3000);
    }
    
    let Confirmation = ()=> order.customer ? (
      <>
        <div>
          <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}</Typography>
          <Divider className={classes.divider}/>
          <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
        </div>
        <br/>
        <Button component={Link} to="/" type="button" variant="outlined">Back to Home</Button>
      </>
    )
    : isFinished ? (
      <>
        <div>
          <Typography variant="h5">Thank you for your purchase</Typography>
          <Divider className={classes.divider}/>
        <br/>
        <Button component={Link} to="/" type="button" variant="outlined">Back to Home</Button>
        </div>
      </>
    )
    : (
      <div className={classes.spinner}>
         <CircularProgress/>
      </div>
    );

    if(error){
      <>
        <Typography variant="h5">Error : {error}</Typography>
        <br/>
        <Button component={Link} to="/" type="button" variant="outlined"></Button>
      </>
    }

    const Form = () => activeStep===0
    ? <AddressForm checkoutToken={checkoutToken} next={next}/>
    : <PaymentForm checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout} timeout={timeout}/>

    return (
        <>
          <CssBaseline/>
          <div className={classes.toolbar}/>
          <main className = {classes.layout}>
              <Paper className={classes.paper}>
                  <Typography variant="h4" align="center">Checkout</Typography>
                  <Stepper className={classes.stepper} activeStep={activeStep}>
                    {steps.map((step)=>(
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                  </Stepper>
                  {activeStep === steps.length ? <Confirmation/>:checkoutToken&&<Form/>}
              </Paper>
          </main>
        </>
    )
}

export default Checkout
