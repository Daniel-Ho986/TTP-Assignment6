import React, {Component} from 'react';

class ZipInfo extends Component{
    render(){
        return(
            <div className="Info">
                <header className="head">
                <h1>{this.props.city}, {this.props.state}</h1>
                </header>
                <ul>                
                <li> State: {this.props.state}</li>
                <li> Location: ({this.props.lat}, {this.props.long})</li>
                <li> Population (estimated): {this.props.population}</li>
                <li> Total Wages: {this.props.wages}</li>
                </ul>
            </div>
        )
    }
}
export default ZipInfo;