import React, { useState, useEffect } from 'react';
import './SearchHouseList.scss';
import { Container, Row, Col } from 'react-bootstrap';
import SearchHouse from '../../components/SearchHouse/SearchHouse';

const SearchHouseList = (params) => {
    const { location } = params;
    const [houses, setHouses] = useState(null);

    useEffect(() => {
        fetch('https://air-cnc-backend.herokuapp.com/all-homes')
            .then(res => res.json())
            .then(data => {
                setHouses(data);
            })
    }, [])

    return (
        <div>
            <Container>
                <h5 className="mb-1 title-home">
                    {
                        houses && houses.filter(house =>
                            house.address.city.toLowerCase() === location.toLowerCase()).length
                    } place found
                </h5>
                <h2 className="city-label">stay in {location} city</h2>
                <Row>
                    {
                        houses && houses.filter(house =>
                            house.address.city.toLowerCase() === location.toLowerCase()).map(house =>
                                <Col sm={12} md={6} lg={12} xl={12} className="mb-3 pb-4 border-line">
                                    <SearchHouse house={house} key={house._id}></SearchHouse>
                                </Col>
                            )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default SearchHouseList;