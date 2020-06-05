import React from 'react';
import './House.scss';
import { Image } from 'react-bootstrap';

const House = (props) => {
    const { house } = props;
    return (
        <div>
            <div>
                <Image src={house.images[0]} fluid className="house-img" />
                <h6 className="city">{house.address.city}</h6>
                <h4 className="title">{house.title}</h4>
                <h5 className="price">${house.price} per person</h5>
                <p className="review">{house.review}({house.ratting}) Superhost</p>
            </div>
        </div>
    );
};

export default House;