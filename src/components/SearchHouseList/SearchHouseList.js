import React, { useState, useEffect } from 'react';
import './SearchHouseList.scss';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import SearchHouse from '../../components/SearchHouse/SearchHouse';

const SearchHouseList = (params) => {
    const { location } = params;
    const [houses, setHouses] = useState(null);
    const [newLocation, setNewLocation] = useState(location);


    useEffect(() => {
        fetch('https://air-cnc-backend.herokuapp.com/all-homes')
            .then(res => res.json())
            .then(data => {
                setHouses(data);
                const count = houses && houses.filter(house => house.address.city.toLowerCase() === newLocation.toLowerCase()).length;
                if (count === 0) {
                    setNewLocation('dhaka');
                }
            })
    }, [])


    return (
        <div>
            <Container>
                <h5 className="mb-1 title-home">
                    {
                        houses && houses.filter(house =>
                            house.address.city.toLowerCase() === newLocation.toLowerCase()).length
                    } place found
                </h5>
                <h2 className="city-label">stay in {newLocation} city</h2>
                {
                    houses == null ?
                    <div className="text-center mt-3">
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div> :
                    <Row>
                        {
                            houses && houses.filter(house =>
                                house.address.city.toLowerCase() === newLocation.toLowerCase()).map(house =>
                                    <Col sm={12} md={6} lg={12} xl={12} className="mb-3 pb-4 border-line">
                                        <SearchHouse house={house} key={house._id}></SearchHouse>
                                    </Col>
                                )
                        }
                    </Row>
                }
            </Container>
        </div>
    );
};

export default SearchHouseList;