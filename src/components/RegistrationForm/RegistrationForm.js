import React, { useState } from 'react';
import './RegistrationForm.scss'
import { Form, Button } from 'react-bootstrap';
import { useForm, Controller } from "react-hook-form";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';

const RegistrationForm = () => {
    const { register, control, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <h2 className="bookingForm-title mb-4 text-center">Sign In </h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formBasicEmail">
                    <div className="login-input mb-3">
                        <Form.Control className="border-0 shadow-none" type="text" placeholder="name" name="name" defaultValue="" ref={register}/>
                    </div>
                    <div className="login-input mb-3">
                        <Form.Control className="border-0 shadow-none" type="email" name="email" defaultValue="" ref={register} placeholder="Enter email" />
                    </div>
                    <div className="login-input mb-3">
                        <Controller 
                        as={
                            <PhoneInput
                            country={"bd"}
                            inputClass="shadow-none border-0"
                            />
                        } 
                        
                        name="phone" control={control} defaultValue="" />
                    </div>
                </Form.Group>
                <Button  className="search-btn gradient-button shadow-none border-0 p-3" type="submit">
                    Sign Up
                </Button>
            </Form>
            
        </div>
    );
};

export default RegistrationForm;