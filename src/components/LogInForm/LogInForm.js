import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import { Link } from 'react-router-dom';

import * as firebase from "firebase/app";
import firebaseConfig from '../../firebase.config';


firebase.initializeApp(firebaseConfig)


const LogInForm = () => {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)

        const appVerifier  = new firebase.auth.RecaptchaVerifier('captcha-container');
        const phoneNumber = "+"+data.phone;
         
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then( (result) => {
                const code = prompt();
                result.confirm(code)
                .then( (result) => {
                    const user = result.user;
                    console.log(user)
                
                })
                .catch( (error) => {
                    console.log(error)
                });
            })
            .catch( (error) => {
                console.log(error)
            });
    }

  
    return (
        <div>
            <h2 className="bookingForm-title mb-4 text-center">Log In </h2>
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
                <div id="captcha-container"></div>
                <Button  className="search-btn gradient-button shadow-none border-0 p-3" type="submit">
                    Login
                </Button>
            </Form>
            <div>
                <p className="text-muted text-center mt-1 mb-3 mx-3 pb-3 px-3">Don't have an account? <Link className="font-weight-bold text-dark" to="/sign-up">Sign Up</Link></p>
            </div>
        </div>
    );
};

export default LogInForm;