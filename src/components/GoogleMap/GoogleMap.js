import React from 'react';
import './GoogleMap.scss';
import GoogleMapReact from 'google-map-react';

const GoogleMap = () => {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    return (
        <div className="map-style">
            {/* <div style={{ height: '100%', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBh6lKeTTuMpDdLyqtQVNSeU9emmI1x34M' }}
                    defaultCenter={{
                        lat: 59.95,
                        lng: 30.33
                      }}
                    defaultZoom={8}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div> */}
        </div>
    );
};

export default GoogleMap;