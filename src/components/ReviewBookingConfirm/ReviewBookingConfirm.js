import React, { useContext } from 'react';
import './ReviewBookingConfirm.scss';
import { Row, Col } from 'react-bootstrap';
import { dataContext } from '../../App';

const ReviewBookingConfirm = (props) => {
    let data = useContext(dataContext);

    let check_in = new Date(data.checkInOutDate.check_in);
    let check_out = new Date(data.checkInOutDate.check_out);

    let Difference_In_Time = check_out.getTime() - check_in.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    const check_in_date = check_in.getDate();
    const check_out_date = check_out.getDate();
    const check_in_day = check_in.toLocaleString('en-us', { weekday: 'long' });
    const check_out_day = check_out.toLocaleString('en-us', { weekday: 'long' });
    const check_in_month = check_in.toLocaleString('en-us', { month: 'short' });
    const check_out_month = check_out.toLocaleString('en-us', { month: 'short' });

    const { showTravelInfo } = props;
    return (
        <div className="review-booking mb-3">
            <div className="review">
                <h1>Review house rules</h1>
                <h5>{Difference_In_Days} night here</h5>
                <Row>
                    <Col sm={6} md={6} lg={6} xl={6} className="check-in-out">
                        <span>{check_in_month} {check_in_date}</span>
                        <p>{check_in_day} check-in</p>
                    </Col>
                    <Col sm={6} md={6} lg={6} xl={6} className="check-in-out">
                        <span>{check_out_month} {check_out_date}</span>
                        <p>{check_out_day} checkout</p>
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
                    <img src="https://i.ibb.co/3f8gpwQ/ic-smoking-rooms-48px.png" alt="ic-smoking-rooms-48px" border="0" className="img-fluid mx-auto" />
                    <span>Smoking allowed</span>
                </div>
            </div>
            <button className="gradient-button agree" onClick={() => showTravelInfo()}>Agree and Continue</button>
        </div>
    );
};

export default ReviewBookingConfirm;