import React from 'react';
import { Image } from 'react-bootstrap';

const Experience = (props) => {
    const { experience } = props;
    return (
        <div>
            <div>
                <div>
                    <Image src={experience.images} fluid className="house-img" />
                    <h6 className="city">{experience.location.city}</h6>
                    <h4 className="title">{experience.title}</h4>
                    <h5 className="price">${experience.price} per person</h5>
                    <p className="review">{experience.review}({experience.ratting}) Superhost</p>
                </div>
            </div>
        </div>
    );
};

export default Experience;