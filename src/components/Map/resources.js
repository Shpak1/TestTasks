import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import {fetchResult} from '../../actions/MapResult'

const mapStateToProps = ({ mapResult }) => ({
    mapResult
})

const actions = {
    fetchResult
}

const EIFFEL_TOWER_POSITION = {
    lat: 48.858608,
    lng: 2.294471
};
let originComplete;
let destinationComplete;
let map;
let origin_place_id;
let destination_place_id;
let travelMode = google.maps.TravelMode.WALKING;
let directionsService = new google.maps.DirectionsService;
let directionsDisplay = new google.maps.DirectionsRenderer;


class Map extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        map = this.map;
       map = new google.maps.Map(this.refs.map, {
            center: EIFFEL_TOWER_POSITION,
            zoom: 16
        });
        directionsDisplay.setMap(map);
        originComplete = new google.maps.places.Autocomplete(this.refs.origin);
        destinationComplete = new google.maps.places.Autocomplete(this.refs.destination)
    }

    expandViewportToFitPlace(map, place) {
    if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
    } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
    }
}

    SetOrigin(){
        originComplete.addListener('place_changed', () => {
            let place = originComplete.getPlace();
            if (!place.geometry) {
                window.alert("Autocomplete's returned place contains no geometry");
                return;
            }
            this.expandViewportToFitPlace(map, place)
            origin_place_id = place.place_id;

            this.route(origin_place_id, destination_place_id, travelMode,
                directionsService, directionsDisplay);
        })
    }

     route(origin_place_id, destination_place_id, travel_mode,
                   directionsService, directionsDisplay) {
         if (!origin_place_id || !destination_place_id) {
             return;
         }
         directionsService.route({
             origin: {'placeId': origin_place_id},
             destination: {'placeId': destination_place_id},
             travelMode: travel_mode
         }, function (response, status) {
             if (status === google.maps.DirectionsStatus.OK) {
                 directionsDisplay.setDirections(response);

                 this.props.fetchResult(response.routes[0].legs[0].start_address, response.routes[0].legs[0].end_address, response.routes[0].legs[0].distance.text);
                 // localStorage.setItem('lis', "[{Name:'qq', Age:11}, {Name:'qwert', Age:111}]")
             } else {
                 window.alert('Directions request failed due to ' + status);
             }
         });
     }

    setDestination(){
        destinationComplete.addListener('place_changed', () => {
            let place = destinationComplete.getPlace();
            if (!place.geometry) {
                window.alert("Autocomplete's returned place contains no geometry");
                return;
            }
            this.expandViewportToFitPlace(map, place)
            destination_place_id = place.place_id;
            this.route(origin_place_id, destination_place_id, travelMode,
                directionsService, directionsDisplay)
        })
    }

    render() {
        console.log(this.props)
        let MapResult = this.props.mapResult;

        const mapStyle = {
            width: '100%',
            height: '100%',
            border: '1px solid black',
            position: 'absolute'
        };

        return (
            <div>
                <div className="Some">
                    <input id="origin-input" ref="origin" onBlur={this.SetOrigin.bind(this)} className="controls" type="text"
                           placeholder="Enter an origin location"/>

                    <input id="destination-input" ref="destination" onBlur={this.setDestination.bind(this)} className="controls" type="text"
                           placeholder="Enter a destination location"/>
                    <div id="right-panel">
                        <h2 className="Title">Results</h2>
                        {MapResult ?
                            MapResult.map(val =>{return(
                                <ul className="ulResult"> {val.total}</ul>
                            )
                            }):null
                        }
                    </div>
                </div>
                <div ref="map" style={mapStyle}>It should be a map!</div>
            </div>
        );
    }
}

export default connect (mapStateToProps, actions) (Map)