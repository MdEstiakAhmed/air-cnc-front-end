import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const HouseImage = (props) => {
    const {houses} = props;
    return (
        <div>
            <Row>
                {
                    houses.map(houseImage =>
                        <Col sm={12} md={12} lg={4} xl={4}>
                            <Image src={houseImage} className="w-100 img-fluid mx-auto d-block"/>
                        </Col>
                    )
                }
            </Row>
        </div>
    );
};

export default HouseImage;