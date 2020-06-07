import React from 'react';
import './SignInForm.scss'
import { Form, Button } from 'react-bootstrap';
import { useForm, Controller } from "react-hook-form";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import { Link } from 'react-router-dom';
// import * as firebase from "firebase/app";
import "firebase/auth";

const SignInForm = () => {
    const { register, control, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data)
    };
    // const demo = useContext(dataContext);
    // console.log(demo.checkInOutDate);


    return (
        <div>
            <h2 className="bookingForm-title mb-4 text-center">Sign Up </h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formBasicEmail">
                    <div className="login-input mb-3">
                        <Form.Control className="border-0 shadow-none" type="text" placeholder="name" name="name" defaultValue="" ref={register}/>
                    </div>
                    <div className="login-input mb-3">
                        <Form.Control className="border-0 shadow-none" type="email" name="email" defaultValue="" ref={register} placeholder="email" />
                    </div>
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
                        />
                    </div>
                    <Form.Text className="text-muted px-3 pb-3">
                         We'll text you to confirm your number. Standard message and data rate apply.
                    </Form.Text>
                </Form.Group>
                <Button  className="search-btn gradient-button shadow-none border-0 p-3" type="submit">
                    Sign Up
                </Button>
            </Form>
            <div>
                <p className="text-muted text-center mt-1 mb-3 mx-3 pb-3 px-3">Already have an account? <Link className="font-weight-bold text-dark" to="/login">Log In</Link></p>
            </div>
        </div>
    );
};

export default SignInForm;