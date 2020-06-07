import React, { useContext } from 'react';
import { dataContext } from '../../App';

const GuestCount = () => {
    let count = useContext(dataContext);
    console.log(count);

    const adultIncrease = () => {
        count.guestCount.adult = count.guestCount.adult + 1;
        count.setGuestCount(count.guestCount);
        console.log("adult", count.guestCount.adult);
    }
    const adultDecrease = () => {
        count.guestCount.adult = count.guestCount.adult - 1;
        count.setGuestCount(count.guestCount);
        console.log("adult",count.guestCount.adult);
    }
    const childIncrease = () => {
        count.guestCount.child = count.guestCount.child + 1;
        count.setGuestCount(count.guestCount);
        console.log("child", count.guestCount.child);
    }
    const childDecrease = () => {
        count.guestCount.child = count.guestCount.child - 1;
        count.setGuestCount(count.guestCount);
        console.log("child",count.guestCount.child);
    }
    const babyIncrease = () => {
        count.guestCount.baby = count.guestCount.baby + 1;
        count.setGuestCount(count.guestCount);
        console.log("baby", count.guestCount.baby);
    }
    const babyDecrease = () => {
        count.guestCount.baby = count.guestCount.baby - 1;
        count.setGuestCount(count.guestCount);
        console.log("baby",count.guestCount.baby);
    }

    return (
        <div>
            <div>
                <span>{count.guestCount.adult} adults </span>
                <span>{count.guestCount.child} child
                </span>
                <span>{count.guestCount.baby} baby</span>
            </div>
            <div>
                <span>adults</span>
                <button onClick={adultDecrease}>-</button>
                <span>{count.guestCount.adult}</span>
                <button onClick={adultIncrease}>+</button>
            </div>
            <div>
                <span>child</span>
                <button onClick={childDecrease}>-</button>
                <span>{count.guestCount.child}</span>
                <button onClick={childIncrease}>+</button>
            </div>
            <div>
                <span>baby</span>
                <button onClick={babyDecrease}>-</button>
                <span>{count.guestCount.baby}</span>
                <button onClick={babyIncrease}>+</button>
            </div>
        </div>
    );
};

export default GuestCount;