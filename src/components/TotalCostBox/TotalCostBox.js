import React from 'react';
import {Link} from 'react-router-dom';
import './TotalCostBox.scss';

const TotalCostBox = () => {
    return (
        <div className="text-center mt-5">
            <Link to={'/booking'}><button className="gradient-button pt-2 pb-2 pl-4 pr-4 booking">BOOKING</button></Link>
        </div>
    );
};

export default TotalCostBox;