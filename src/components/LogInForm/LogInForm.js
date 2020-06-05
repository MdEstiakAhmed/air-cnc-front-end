import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import { Link } from 'react-router-dom';

const LogInForm = () => {
    const { control, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div>
            <h2 className="bookingForm-title mb-4 text-center">Log In </h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formBasicEmail">
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
                    Login
                </Button>
            </Form>
            <div>
                <p className="text-muted text-center m-3 p-3">Don't have an account? <Link className="font-weight-bold text-dark" to="/sign-up">Sign Up</Link></p>
            </div>
        </div>
    );
};

export default LogInForm;