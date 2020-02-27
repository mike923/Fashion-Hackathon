import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100vw',
    height: '93vh',
    marginRight: '0',
    position: 'absolute',
    left:'-60px',
    bottom:'0px',
    top:'40px'
};


class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stores: [
                { latitude: 40.753128, longitude: -73.986304 },
                { latitude: 40.953490, longitude: -74.066891 },
                { latitude: 40.690626, longitude: -73.863369 },
                { latitude: 39.897151, longitude: -75.292922},
                { latitude: 32.390816, longitude: -86.214771 },
                { latitude: 47.5524695, longitude: -122.0425407 },
            ]
        }
    }

    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
            return <Marker key={index} id={index} position={{
                lat: store.latitude,
                lng: store.longitude
            }}
                onClick={() => console.log("You clicked me!")} />
        })
    }

    render() {
        return (
            <div className='mapContainer'>
                <Map
                    google={this.props.google}
                    zoom={12}
                    style={mapStyles}
                    initialCenter={{ lat: 40.753128, lng: -73.986304 }}
                >
                    {this.displayMarkers()}
                </Map>

            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey:process.env.REACT_APP_API_KEY
})(MapContainer);
