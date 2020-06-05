import React from 'react';
import './RegistrationForm.scss'
import { Form, Button } from 'react-bootstrap';
import {Input} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";

const RegistrationForm = () => {
    const { register, handleSubmit } = useForm();
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
                </Form.Group>
                <Button  className="search-btn gradient-button shadow-none border-0 p-3" type="submit">
                    Sign Up
                </Button>
            </Form>
            
        </div>
    );
};

export default RegistrationForm;