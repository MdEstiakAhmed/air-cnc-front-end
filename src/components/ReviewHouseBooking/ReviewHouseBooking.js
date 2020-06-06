import React, { useContext, useEffect } from 'react';
import './ReviewHouseBooking.scss';
import { dataContext } from '../../App';

const ReviewHouseBooking = (props) => {
    const data = useContext(dataContext);
    console.log(data.checkInOutDate.check_in);

    const { paymentInfo } = props;
    console.log(paymentInfo);

    let purchaseInfo = {
        order_no: paymentInfo.created_code,
        payment_id: paymentInfo.payment_id,
        payment_type: paymentInfo.card_type,
        card_Number: paymentInfo.card_last_four_digit,
        check_in: data.checkInOutDate.check_in,
        check_out: data.checkInOutDate.check_out,
    };

    // useEffect(() => {
    //     fetch('https://air-cnc-backend.herokuapp.com/all-bookings', {
    //         method: 'POST',
    //         mode: 'cors',
    //         cache: 'no-cache',
    //         credentials: 'same-origin',
    //         headers: {
    //         'Content-Type': 'application/json'
    //         },
    //         redirect: 'follow',
    //         referrerPolicy: 'no-referrer',
    //         body: JSON.stringify(paymentInfo)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);

    //     })
    // }, [])

    return (
        <div>
            <h1 className="text-center mt-5">Confirmed</h1>
            <table className="table text-center">
                <tbody>
                    <tr>
                        <th scope="col">Order ID:</th>
                        <th scope="col">{purchaseInfo.check_in}</th>
                    </tr>
                    <tr>
                        <th scope="col">Payment ID:</th>
                        <th scope="col">{purchaseInfo.check_out}</th>
                    </tr>
                    <tr>
                        <th scope="col">Order ID:</th>
                        <th scope="col">{purchaseInfo.created_code}</th>
                    </tr>
                    <tr>
                        <th scope="col">Payment ID:</th>
                        <th scope="col">{purchaseInfo.payment_id}</th>
                    </tr>
                    <tr>
                        <th scope="col">Payment type:</th>
                        <th scope="col">{purchaseInfo.card_type}</th>
                    </tr>
                    <tr>
                        <th scope="col">card Number:</th>
                        <th scope="col">{purchaseInfo.card_last_four_digit}</th>
                    </tr>
                </tbody>
            </table>F
        </div>
    );
};

export default ReviewHouseBooking;