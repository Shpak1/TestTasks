import React, {Component} from 'react'
import{connect} from 'react-redux'


class MapTracker extends Component{
    constructor(props) {
        super(props);
        this.state = {
            valueFirstLatitude: '',
            valueFirstLongitude:'',
            valueSecondLatitude: '',
            valueSecondlongitude:'',
        };
    }

    handleChangeFirstLatitude(event) {
        this.setState({valueFirstLatitude: event.target.value});
        console.log(this.state)
    }
    handleChangeFirstLongitude(event) {
        this.setState({valueFirstLongitude: event.target.value});
        console.log(this.state)
    }

    handleSubmit(event) {
        console.log(this.state)
        alert('Coordinates of first point is:' + this.state.valueFirstLatitude + this.state.valueFirstLongitude);
    }

    render() {
        return (
            <div>
                <div>
                    <span>
                        First point
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <label>
                                First Latitude
                                <input type="text" value={this.state.valueFirstLatitude} onChange={this.handleChangeFirstLatitude.bind(this)} />
                            </label>
                            <label>
                                First Longitude
                                <input type="text" value={this.state.valueFirstLongitude} onChange={this.handleChangeFirstLongitude.bind(this)} />
                            </label>
                            <input type="submit" value="Submit" />
                    </form>
                </span>
                    </div>

            </div>
        );
    }
}
export default connect(null) (MapTracker)