import React from 'react';
import './BookingForm.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const BookingForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // work with data
        console.log(data);
        window.location.href="/search/"+data.location;
    };

    return (
        <div>
            <h3 className="bookingForm-title mb-4">Where do you want to go</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="location-field">
                    <label htmlFor="location" className="location-label">LOCATION</label>
                    <input id="location" className="location" name="location" placeholder="Add city, landmark or address" ref={register} />
                </div>
                <Row className="mt-4">
                    <Col sm={6} md={6} lg={6} xl={6}>
                        <div className="date-field">
                            <label htmlFor="arrival" className="date-label">Arrival</label>
                            <input type="date" id="arrival" className="date" name="arrival" ref={register} />
                        </div>
                    </Col>
                    <Col sm={6} md={6} lg={6} xl={6}>
                        <div className="date-field">
                            <label htmlFor="departure" className="date-label">Departure</label>
                            <input type="date" id="departure" className="date" name="departure" ref={register} />
                        </div>
                    </Col>
                </Row>
                <div>
                    <input type="submit" value="Search" className="search-btn gradient-button" />
                </div>
            </form>
        </div>
    );
};

export default BookingForm;