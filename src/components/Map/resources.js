import React from 'react';
import { Component } from 'react';

const ARC_DE_TRIOMPHE_POSITION = {
    lat: 48.873947,
    lng: 2.295038
};

const EIFFEL_TOWER_POSITION = {
    lat: 48.858608,
    lng: 2.294471
};

class Map extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.map = new google.maps.Map(this.refs.map, {
            center: EIFFEL_TOWER_POSITION,
            zoom: 16
        });

        this.origin = new google.maps.places.Autocomplete(this.refs.origin);
        console.log(this.origin)
    }
    SetOrigin(){
        this.origin.bindTo('bounds', this.map);
        console.log(this.origin)
    }

    render() {

        const mapStyle = {
            width: '100%',
            height: '100%',
            border: '1px solid black',
            position: 'absolute'
        };

        return (
            <div>
                <div className="Some">
                    <input id="origin-input" ref="origin" onBlur={this.SetOrigin} className="controls" type="text"
                           placeholder="Enter an origin location"/>

                    <input id="destination-input" ref="destination" className="controls" type="text"
                           placeholder="Enter a destination location"/>
                    <div id="right-panel">
                        <h2 className="Title">Results</h2>
                        <ul className="ulResult"></ul>
                    </div>
                </div>
                <div ref="map" style={mapStyle}>I should be a map!</div>
            </div>
        );
    }
}


export default Map