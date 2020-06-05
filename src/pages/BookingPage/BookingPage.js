import React, { useState, useEffect } from 'react';
import MainApp from '../../app/MainApp';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewHouseBooking from '../../components/ReviewHouseBooking/ReviewHouseBooking';
import ReviewTravelInfo from '../../components/ReviewTravelInfo/ReviewTravelInfo';
import ReviewPayment from '../../components/ReviewPayment/ReviewPayment';
import ReviewBookingConfirm from '../../components/ReviewBookingConfirm/ReviewBookingConfirm';

const BookingPage = () => {
    const [houseBooking, setHouseBooking] = useState(true);
    const [travelINfo, setTravelINfo] = useState(false);
    const [payment, setPayment] = useState(false);
    const [bookingConfirm, setBookingConfirm] = useState(false);

    return (
        <div>
            <MainApp>
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={8} xl={8}>
                            <ReviewHouseBooking className="mt-4 mb-4"></ReviewHouseBooking>
                            <ReviewTravelInfo className="mt-4 mb-4"></ReviewTravelInfo>
                            <ReviewPayment className="mt-4 mb-4"></ReviewPayment>
                            <ReviewBookingConfirm className="mt-4 mb-4"></ReviewBookingConfirm>
                        </Col>
                        <Col sm={12} md={12} lg={4} xl={4}></Col>
                    </Row>
                </Container>
            </MainApp>
        </div>
    );
};

export default BookingPage;