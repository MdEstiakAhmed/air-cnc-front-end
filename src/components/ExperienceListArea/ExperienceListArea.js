import React, { useEffect, useState } from 'react';
import './ExperienceListArea.scss';
import Experience from '../../components/Experience/Experience';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

const ExperienceListArea = () => {
    const [experiences, setExperiences] = useState(null);

    useEffect(() => {
        fetch('https://air-cnc-backend.herokuapp.com/all-experiences')
            .then(res => res.json())
            .then(data => {
                setExperiences(data);
            })
    }, [])

    return (
        <div>
            <h2 className="mb-3 title-home">experience</h2>
            {
                experiences == null ? 
                <div className="text-center mt-3">
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div> :
                <Container>
                    <Row>
                        {
                            experiences && experiences.map(experience => 
                                <Col sm={12} md={6} lg={4} xl={4} className="mb-5">
                                    <Experience experience={experience} key={experience._id}></Experience>
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            }
        </div>
    );
};

export default ExperienceListArea;