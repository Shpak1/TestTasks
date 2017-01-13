import React, {Component} from 'react'
import{connect} from 'react-redux'


class MapTracker extends Component{
    render() {
        console.log(this.props)
        return (
            <div>
                <input id="origin-input" className="controls" type="text"
                       placeholder="Enter an origin location"/>

                    <input id="destination-input" className="controls" type="text"
                           placeholder="Enter a destination location"/>
                <div id="right-panel">
                    <h2 className="Title">Results</h2>
                    <ul className="ulResult"></ul>
                </div>
            </div>
        );

    }
}
export default connect(null) (MapTracker)