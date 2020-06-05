import React, { useState, useEffect } from 'react';
import MainApp from '../../app/MainApp';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HouseImage from '../../components/HouseImage/HouseImage';
import HouseInfo from '../../components/HouseInfo/HouseInfo';
import TotalCostBox from '../../components/TotalCostBox/TotalCostBox';

const HouseDetails = () => {
    const { houseId } = useParams();
    const [houses, setHouses] = useState(null);

    useEffect(() => {
        fetch('https://air-cnc-backend.herokuapp.com/all-homes')
            .then(res => res.json())
            .then(data => {
                houseId && data.filter(house =>
                    house._id === houseId).map(house =>
                        setHouses(house));
            })
    }, [])

    return (
        <div>
            <MainApp>
                <Container>
                    <h1 className="text-center mt-3 mb-3">House Details</h1>
                    {
                        houses && <HouseImage houses={houses.images}></HouseImage>
                    }
                    <Row>
                        <Col sm={12} md={12} lg={6} xl={6}>
                            {
                                houses && <HouseInfo houses={houses}></HouseInfo>
                            }
                        </Col>
                        <Col sm={12} md={12} lg={6} xl={6}>
                            {
                                houses && <TotalCostBox></TotalCostBox>
                            }
                        </Col>
                    </Row>
                </Container>
            </MainApp>
        </div>
    );
};

export default HouseDetails;