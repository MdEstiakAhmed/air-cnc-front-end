import React, { useState, useContext } from 'react';
import './BookingForm.scss';
import { Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import GuestCount from '../../components/GuestCount/GuestCount';
import { dataContext } from '../../App';

const BookingForm = () => {
    const { guestCount } = useContext(dataContext);
    console.log(guestCount);
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const onSubmit = (data) => {
        if (data.location && data.arrival && data.departure) {
            if (new Date(data.departure) > new Date(data.arrival)) {
                if (new Date() < new Date(data.arrival)) {
                    if ((guestCount.adult + guestCount.child + guestCount.baby) > 0) {
                        setError(false);
                        window.location.href = "/search/" + data.location + "/" + data.arrival + "/" + data.departure;
                    }
                    else {
                        setError(true);
                        setErrorMessage("Select guest");
                    }
                }
                else {
                    setError(true);
                    setErrorMessage("arrival date is in past");
                }
            }
            else {
                setError(true);
                setErrorMessage("error departure date");
            }
        }
        else {
            setError(true);
            setErrorMessage("fill-up all field");
        }
    };

    return (
        <div>
            <h3 className="bookingForm-title mb-4">Where do you want to go</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="location-field">
                    <label htmlFor="location" className="location-label">LOCATION</label>
                    {/* <input id="location" className="location" name="location" placeholder="Add city, landmark or address" ref={register} /> */}
                    <select id="location" className="location" name="location" placeholder="Add city, landmark or address" ref={register}>
                        <option value="dhaka">Dhaka</option>
                        <option value="gulshan">Gulshan</option>
                        <option value="mirpur">Mirpur</option>
                        <option value="rajshahi">rajshahi</option>
                    </select>
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
            <GuestCount />
            {
                error && <div class="alert alert-danger mt-3 search-e" role="alert">
                    {errorMessage}
                </div>
            }
            <div>
            </div>
        </div>
    );
};

export default BookingForm;