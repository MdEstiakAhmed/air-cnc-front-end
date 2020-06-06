import React, { useState } from 'react';
import './ReviewPayment.scss';
import { Button } from 'react-bootstrap';
import {
    CardElement,
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from '@stripe/react-stripe-js';

const ReviewPayment = (props) => {
    const { showBookingInfo } = props;
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentFinished, setPaymentFinished] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const value = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardNumberElement),
        });
        let paymentInfo = null;

        if (value.error) {
            setPaymentError(value.error.message);
            setPaymentFinished(null);
        }
        else if (!value.error) {
            setPaymentError(false);
            setPaymentFinished(value.paymentMethod);
            let paymentInfo = {
                payment_id: value.paymentMethod.id,
                card_type: value.paymentMethod.card.brand,
                card_last_four_digit: value.paymentMethod.card.last4,
                created_code: value.paymentMethod.created
            }
            showBookingInfo(paymentInfo);
        }
    }
    return (
        <div className="mt-5 mb-3">
            <form onSubmit={handleSubmit}>
                <h2>Payment Selection</h2>
                <div className="payment-box">
                    <div className="payment-title">
                        <h1 className=" mt-3 mb-1">Credit Card</h1>
                        <p>Safe money transfer from your bank account. Visa, Maestro, Discover, American Express.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="" className="payment-label">Card Number:</label>
                        <CardNumberElement className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="payment-label">Card CVC Number:</label>
                        <CardCvcElement className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="payment-label">Card Expiry Date:</label>
                        <CardExpiryElement className="form-control" />
                    </div>
                </div>


                <div className="row">
                    <div className="col">
                        <div className="text-left mt-5">
                            {/* <Button className="btn-primary text-uppercase font-weight-bolder border-0 px-5" onClick={() => showUser()}>Back</Button> */}
                        </div>
                    </div>
                    <div className="col">
                        <div className="text-right mt-5">
                            <Button type="submit" className="gradient-button pay" >
                                Continue to pay
                            </Button>
                        </div>
                    </div>
                </div>

                {
                    paymentError &&
                    <div className="alert alert-danger mt-5" role="alert">
                        {paymentError}
                    </div>
                }
                {
                    paymentFinished &&
                    <div className="alert alert-success mt-5" role="alert">
                        successfully purchased
                    </div>
                }
            </form>
        </div>
    );
};

export default ReviewPayment;