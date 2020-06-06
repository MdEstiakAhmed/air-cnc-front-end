import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import { Link } from 'react-router-dom';

import * as firebase from "firebase/app";
import firebaseConfig from '../../firebase.config';
import LinearProgress from '@material-ui/core/LinearProgress';
import VerifyCode from '../VerifyCode/VerifyCode';


firebase.initializeApp(firebaseConfig)


const LogInForm = () => {
    const { control, handleSubmit } = useForm();
    const [ loginUser, setLoginUser ] = useState(null);
    const [ phoneNum, setPhoneNum ] = useState(null)
    const [ codeNum, setCodeNum ] = useState(null)
    const [showSpinner, setShowSpinner] = useState(false);
    const [showVerify, setVerify] = useState(false);

    
    
    const handleCode = () => {
        const value = prompt()
        return value
    }

    const handleCaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('captcha-container', {
            'size': 'invisible',
            'callback': function(response) {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              onSignInSubmit();
            }
          });
    }

    const onSignInSubmit = () => {
        handleCaptcha()
        var appVerifier = window.recaptchaVerifier;

        const phoneNumber = "+8801761579485"
         
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then( (result) => {
                setVerify(true)                
                const code = handleCode()
                result.confirm(code)

                .then( (result) => {
                    
                        setLoginUser(result.user);
                        console.log(result.user)
                
                })
                .catch( (error) => {
                    console.log(error)
                });
            })
            .catch( (error) => {
                console.log(error)
            });
    }

    const onSubmit = (data) => {
        if(data.phone){
            setPhoneNum(data.phone)
            setCodeNum(data.code)
        }
        onSignInSubmit()
        setShowSpinner(true)
    }

  
    return (
        <>
            <div id="captcha-container"></div>
            {
                showVerify ?
                <VerifyCode/>
                :
        
                <div>
                    <h2 className="bookingForm-title mb-4 text-center">Log In </h2>
                    <div>
                        {showSpinner && <LinearProgress color="secondary" />}
                    </div>
                    
                    <Form onSubmit={handleSubmit(onSubmit)}>
                    
                                        
                            <Form.Group controlId="formBasicEmail">
                            <div className="login-input">
                                <Controller 
                                as={
                                    <PhoneInput
                                    country={"bd"}
                                    inputClass="shadow-none border-0"
                                    />
                                } 
                                
                                name="phone" control={control} defaultValue=""/>
                            </div>                    
                            <Form.Text className="text-muted px-3 pb-3">
                                We'll text you to confirm your number. Standard message and data rate apply.
                            </Form.Text>
                        </Form.Group>
                        
                        <Button  className="search-btn gradient-button shadow-none border-0 p-3" type="submit">
                            Log in
                        </Button>
                    </Form>
                    <div>
                        <p className="text-muted text-center mt-1 mb-3 mx-3 pb-3 px-3">Don't have an account? <Link className="font-weight-bold text-dark" to="/sign-up">Sign Up</Link></p>
                    </div>
                </div>
            
            }
       
        </>

    );
};

export default LogInForm;