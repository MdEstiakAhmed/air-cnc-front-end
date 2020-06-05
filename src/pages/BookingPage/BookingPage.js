import React, { useState, useEffect } from 'react';
import MainApp from '../../app/MainApp';
import { Container, Row, Col } from 'react-bootstrap';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import ReviewHouseBooking from '../../components/ReviewHouseBooking/ReviewHouseBooking';
import ReviewTravelInfo from '../../components/ReviewTravelInfo/ReviewTravelInfo';
import ReviewPayment from '../../components/ReviewPayment/ReviewPayment';
import ReviewBookingConfirm from '../../components/ReviewBookingConfirm/ReviewBookingConfirm';

const BookingPage = () => {
    const stripePromise = loadStripe('pk_test_eGVHDnhty24W6Zh7nZTouMuW00Z9TSdfOi');

    const [houseBooking, setHouseBooking] = useState(true);
    const [travelInfo, setTravelInfo] = useState(false);
    const [payment, setPayment] = useState(false);
    const [bookingConfirm, setBookingConfirm] = useState(false);

    const showTravelInfo = () => {
        setHouseBooking(false);
        setTravelInfo(true);
        setPayment(false);
        setBookingConfirm(false);
    }

    const showPaymentInfo = () => {
        setHouseBooking(false);
        setTravelInfo(false);
        setPayment(true);
        setBookingConfirm(false);
    }

    const showBookingInfo = () => {
        setHouseBooking(false);
        setTravelInfo(false);
        setPayment(false);
        setBookingConfirm(true);
    }


    return (
        <div>
            <MainApp>
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={8} xl={8}>
                            {
                                houseBooking && <ReviewBookingConfirm showTravelInfo={showTravelInfo} className="mt-4 mb-4"/>
                            }
                            {
                                travelInfo && <ReviewTravelInfo showPaymentInfo={showPaymentInfo} className="mt-4 mb-4"/>
                            }
                            {
                                payment && <Elements stripe={stripePromise}>
                                    <ReviewPayment showBookingInfo={showBookingInfo} className="mt-4 mb-4"/>
                                </Elements>
                            }
                            {
                                bookingConfirm && <ReviewHouseBooking className="mt-4 mb-4"/>
                            }
                        </Col>
                        <Col sm={12} md={12} lg={4} xl={4}></Col>
                    </Row>
                </Container>
            </MainApp>
        </div>
    );
};

export default BookingPage;