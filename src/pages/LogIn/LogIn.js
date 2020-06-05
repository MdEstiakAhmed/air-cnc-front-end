import React from 'react';
import MainApp from '../../app/MainApp';
import { Container, Row, Col } from 'react-bootstrap';
import LogInForm from '../../components/LogInForm/LogInForm';

const LogIn = () => {
    return (
        <div>
            <MainApp>
                <Container>
                    <Row className="mt-5 justify-content-center">
                        <Col sm={12} md={12} lg={6} xl={5} >
                            <LogInForm/>
                        </Col>
                    </Row>
                </Container>
            </MainApp>
            
        </div>
    );
};

export default LogIn;