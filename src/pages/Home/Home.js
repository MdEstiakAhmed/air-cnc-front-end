import React from 'react';
import MainApp from '../../app/MainApp';
import { Container, Row, Col } from 'react-bootstrap';
import BookingForm from '../../components/BookingForm/BookingForm';
import HouseListArea from '../../components/HouseListArea/HouseListArea';
import ExperienceListArea from '../../components/ExperienceListArea/ExperienceListArea';

const Home = () => {
    return (
        <div>
            <MainApp>
                <Container>
                    <Row className="mt-5">
                        <Col sm={12} md={12} lg={4} xl={4} >
                            <BookingForm/>
                        </Col>
                        <Col sm={12} md={12} lg={8} xl={8} >
                            {/* <ExperienceListArea/> */}
                            <HouseListArea/>
                        </Col>
                    </Row>
                </Container>
            </MainApp>
        </div>
    );
};

export default Home;