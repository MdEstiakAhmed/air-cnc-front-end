import React from 'react';
import './SingUp.scss'
import MainApp from '../../app/MainApp';
import { Container, Row, Col } from 'react-bootstrap';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

const SingUp = () => {
    return (
        <div>
            <MainApp>
                <Container>
                    <Row className="mt-5 justify-content-center">
                        <Col sm={12} md={12} lg={6} xl={5} >
                            <RegistrationForm/>
                        </Col>
                    </Row>
                </Container>
            </MainApp>
        </div>
    );
};

export default SingUp;