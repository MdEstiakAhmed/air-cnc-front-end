import React, { useEffect, useState } from 'react';
import './HouseListArea.scss';
import House from '../../components/House/House';
import { Container, Row, Col } from 'react-bootstrap';

const HouseListArea = () => {
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
                <h2 className="mb-3 title-home">Homes</h2>
                <Row>
                    {
                        houses && houses.map(house => 
                            <Col sm={12} md={6} lg={4} xl={4} className="mb-5">
                                <House house={house} key={house._id}></House>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default HouseListArea;