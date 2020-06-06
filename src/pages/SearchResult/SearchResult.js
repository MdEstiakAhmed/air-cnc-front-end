import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import MainApp from '../../app/MainApp';
import SearchHouseList from '../../components/SearchHouseList/SearchHouseList';
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import { dataContext } from '../../App';

const SearchResult = () => {
    const { location, arrival, departure } = useParams();
    let { checkInOutDate, setCheckInOutDate } = useContext(dataContext);
    checkInOutDate.check_in = arrival;
    checkInOutDate.check_out = departure;
    setCheckInOutDate(checkInOutDate);
    
    return (
        <div>
            <MainApp>
                <Container>
                    <Row className="mt-5">
                        <Col sm={12} md={12} lg={6} xl={6} >
                            <SearchHouseList location={location}></SearchHouseList>
                        </Col>
                        <Col sm={12} md={12} lg={6} xl={6} >
                            <GoogleMap></GoogleMap>
                        </Col>
                    </Row>
                </Container>
            </MainApp>
        </div>
    );
};

export default SearchResult;