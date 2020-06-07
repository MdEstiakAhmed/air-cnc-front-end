import React from 'react';
import './ReviewTravelInfo.scss';
// import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const ReviewTravelInfo = (props) => {
    const { showPaymentInfo } = props;
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        // work with data
        // console.log(data);
        // window.location.href="/search/"+data.location;
        showPaymentInfo();
    };

    return (
        <div className="travel-info mt-4 mb-3">
            <h1>Traveling for work?</h1>
            <h5>Say hello to your host.</h5>
            <p>Let your host know a little about yourself and why you are coming.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea row="5" name="short-data" ref={register} placeholder="Tell me something about you..."></textarea>
                {/* <input type="text" name="" id=""/> */}
                <input type="submit" value="Continue" className="gradient-button"/>
            </form>
        </div>
    );
};

export default ReviewTravelInfo;