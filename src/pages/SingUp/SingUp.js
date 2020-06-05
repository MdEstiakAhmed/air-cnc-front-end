import React from 'react';
import './SingUp.scss'
import MainApp from '../../app/MainApp';
import { Container, Row, Col } from 'react-bootstrap';
import SignInForm from '../../components/SignInForm/SignInForm';

const SingUp = () => {
    return (
        <div>
            <MainApp>
                <Container>
                    <Row className="mt-5 justify-content-center">
                        <Col sm={12} md={12} lg={6} xl={5} >
                            <SignInForm/>
                        </Col>
                    </Row>
                </Container>
            </MainApp>
        </div>
    );
};

export default SingUp;