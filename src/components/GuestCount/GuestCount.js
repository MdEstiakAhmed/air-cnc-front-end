import React, { useContext, useState } from 'react';
import { dataContext } from '../../App';
import './GuestCount.scss';

const GuestCount = () => {
    let { checkInOutDate, setCheckInOutDate, guestCount, setGuestCount } = useContext(dataContext);
    let [adult, setAdult] = useState(0);
    let [baby, setBaby] = useState(0);
    let [child, setChild] = useState(0);

    const adultIncrease = () => {
        guestCount.adult = guestCount.adult + 1;
        setGuestCount(guestCount);
        adult = adult + 1;
        setAdult(adult);
    }
    const adultDecrease = () => {
        if (adult > 0) {
            guestCount.adult = guestCount.adult - 1;
            setGuestCount(guestCount);
            adult = adult - 1;
            setAdult(adult);
        }
    }
    const childIncrease = () => {
        guestCount.child = guestCount.child + 1;
        setGuestCount(guestCount);
        child = child + 1;
        setChild(child);
    }
    const childDecrease = () => {
        if (child > 0) {
            guestCount.child = guestCount.child - 1;
            setGuestCount(guestCount);
            child = child - 1;
            setChild(child);
        }
    }
    const babyIncrease = () => {
        guestCount.baby = guestCount.baby + 1;
        setGuestCount(guestCount);
        baby = baby + 1;
        setBaby(baby);
    }
    const babyDecrease = () => {
        if (baby > 0) {
            guestCount.baby = guestCount.baby - 1;
            setGuestCount(guestCount);
            baby = baby - 1;
            setBaby(baby);
        }
    }

    return (
        <div className="guest-box">
            {
                adult <= 0 && child <= 0 && baby <= 0 ?
                    <div className="guest-count-box">no guest selected</div> :
                    <div className="guest-count-box">
                        {adult > 0 && <span className="guest-count">{adult} adult </span>}
                        {child > 0 && <span className="guest-count">{child} child </span>}
                        {baby > 0 && <span className="guest-count">{baby} baby</span>}
                    </div>
            }
            <div>
                <div className="row justify-content-around  guest-part">
                    <div className="col">
                        <span className="guest-type">adults</span>
                    </div>
                    <div className="col-6">
                        <div className="guest-change">
                            <button onClick={adultDecrease} className="guest-change-button">
                                <span className="guest-change-sign pr-2">-</span>
                            </button>
                            <span className="guest-change-value">{adult}</span>
                            <button onClick={adultIncrease} className="guest-change-button">
                                <span className="guest-change-sign pl-2">+</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="row justify-content-around guest-part">
                    <div className="col">
                        <span className="guest-type">child</span>
                    </div>
                    <div className="col-6">
                        <div className="guest-change">
                            <button onClick={childDecrease} className="guest-change-button">
                                <span className="guest-change-sign pr-2">-</span>
                            </button>
                            <span className="guest-change-value">{child}</span>
                            <button onClick={childIncrease} className="guest-change-button">
                                <span className="guest-change-sign pl-2">+</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="row justify-content-around  guest-part">
                    <div className="col">
                        <span className="guest-type">baby</span>
                    </div>
                    <div className="col-6">
                        <div className="guest-change">
                            <button onClick={babyDecrease} className="guest-change-button">
                                <span className="guest-change-sign pr-2">-</span>
                            </button>
                            <span className="guest-change-value">{baby}</span>
                            <button onClick={babyIncrease} className="guest-change-button">
                                <span className="guest-change-sign pl-2">+</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuestCount;