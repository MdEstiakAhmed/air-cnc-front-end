import React from 'react';
import './SearchHouse.scss';
import { Row, Col, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";

const SearchHouse = (params) => {
    const { house } = params;

    return (
        <div>
            <Row>
                <Col sm={5} md={5} lg={5} xl={5}>
                    <Image src={house.images[0]} fluid className="house-img-search" />
                </Col>
                <Col sm={7} md={7} lg={7} xl={7} className="search-content">
                    <Link to={`/house/${house._id}`}>
                        <h1>{house.title}</h1>
                    </Link>
                    <h6>{house.guest} guests  {house.bedroom} bedrooms  {house.bed} beds  {house.bath}baths</h6>
                    <h5>{house.features[0]}</h5>
                    <Row>
                        <Col sm={6} md={6} lg={6} xl={6} className="search-review">
                            <h6>{house.review}({house.ratting})</h6>
                        </Col>
                        <Col sm={6} md={6} lg={6} xl={6} className="search-cost">
                            <h4><span>${(parseInt(house.price) / parseInt(house.guest)).toFixed(2)}/</span>night</h4>
                            <p>${house.price} total</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default SearchHouse;