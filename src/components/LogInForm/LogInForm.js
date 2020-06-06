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
    const [showSpinner, setShowSpinner] = useState(false);
    const [showVerifyCode, setShowVerifyCode] = useState(false);
    const [confirmationResult, SetConfirmationResult] = useState(null);

    
    
     const getVerifyCode = (code) => {
        code && setShowVerifyCode(false)
        code && confirmationResult.confirm(code).then(function (result) {
        // User signed in successfully.
            const user = result.user;
            setLoginUser(user)
            console.log(user)
        })
        .catch( (error) => {
            console.log(error)
        })
     }



    const sentOTP = (number) => {

        const captchaVerifier = new firebase.auth.RecaptchaVerifier('captcha-container', {'size': 'invisible'});
        
        const phoneNumber = number && "+"+number
        firebase.auth().signInWithPhoneNumber(phoneNumber, captchaVerifier)
            .then( (result) => {
                setShowVerifyCode(true)
                SetConfirmationResult(result)
                setShowSpinner(false)
                console.log(result)            
            })
            .catch( (error) => {
                console.log(error)
            });
    }

    const onSubmit = (data) => {
        if(data.phone){
            sentOTP(data.phone)
            setShowSpinner(true)
        }        
        
    }

  
    return (
        <>
            <div id="captcha-container"></div>
          
                
        
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
                                
                                name="phone" 
                                control={control}
                                defaultValue="" 
                                rules={{ required: true }}
                                />
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
            
                <VerifyCode show={showVerifyCode} onHide={() => setShowVerifyCode(false)} getVerifyCode={getVerifyCode}/>
                
           
       
        </>

    );
};

export default LogInForm;