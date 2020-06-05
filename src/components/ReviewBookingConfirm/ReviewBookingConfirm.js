import React from 'react';
import './ReviewBookingConfirm.scss';
import { Row, Col } from 'react-bootstrap';

const ReviewBookingConfirm = () => {
    return (
        <div className="review-booking">
            <div className="review">
                <h1>Review house rules</h1>
                <h5>{} night in {}</h5>
                <Row>
                    <Col sm={6} md={6} lg={6} xl={6} className="check-in-out">
                        <span>APR 13</span>
                        <p>{} check-in</p>
                    </Col>
                    <Col sm={6} md={6} lg={6} xl={6} className="check-in-out">
                        <span>APR 13</span>
                        <p>{} checkout</p>
                    </Col>
                </Row>
                <p>Self check-in with building stuff</p>
            </div>
            <div className="keep-mind">
                <h3>Things to keep in mind</h3>
                <div className="keep-mind-item">
                    <img src="https://i.ibb.co/7KvB20S/ic-child-friendly-48px.png" alt="ic-child-friendly-48px" border="0" className="img-fluid mx-auto" />
                    <span>Suitable for children and infant</span>
                </div>
                <div className="keep-mind-item">
                    <img src="https://i.ibb.co/J7StDsK/ic-pets-48px.png" alt="ic-pets-48px" border="0" className="img-fluid mx-auto" />
                    <span>Pets allowed</span>
                </div>
                <div className="keep-mind-item">
                    <img src="https://i.ibb.co/XDnZ15m/forbidden.png" alt="forbidden" border="0" className="img-fluid mx-auto" />
                    <span>No parties and events</span>
                </div>
                <div className="keep-mind-item">
                    <img src="https://i.ibb.co/3f8gpwQ/ic-smoking-rooms-48px.png" alt="ic-smoking-rooms-48px" border="0" className="img-fluid mx-auto"/>
                    <span>Smoking allowed</span>
                </div>
                </div>
            </div>
    );
};

export default ReviewBookingConfirm;