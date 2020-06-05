import React from 'react';
import './HouseInfo.scss';

const HouseInfo = (props) => {
    const { houses } = props;
    console.log(houses);
    return (
        <div>
            <section className="Basic">
                <h2>{houses.title}</h2>
                <h5>{houses.address.city}, {houses.address.country}</h5>
                <h6>{houses.guest} guests  {houses.bedroom} bedrooms  {houses.bed} beds  {houses.bath} baths</h6>
            </section>
            <section className="features">
                <section className="feature-item">
                    <img src="https://i.ibb.co/BNwXhqm/home.png" alt="home-logo" />
                    <h5>Entire Home</h5>
                    <h6>{houses.features[0]}</h6>
                </section>
                <section className="feature-item">
                    <img src="https://i.ibb.co/G9spRLf/checkmark-square-2.png" alt="check-in" />
                    <h5>Self check-in</h5>
                    <h6>{houses.features[1]}</h6>
                </section>
                <section className="feature-item">
                    <img src="https://i.ibb.co/9cWdJLp/solid.png" alt="clean" />
                    <h5>Sparking clean</h5>
                    <h6>{houses.features[2]}</h6>
                </section>
            </section>
            <section className="description">
                <p>{houses.descriptions}</p>
            </section>
            <section className="review">
                <h4>Reviews</h4>
                <h6>{houses.review}({houses.ratting})</h6>
            </section>
        </div>
    );
};

export default HouseInfo;