import React, { Component } from 'react';
import '../TakeCare/takecare.css';
import Postdata from '../../Components/Data/api.json';

class TakeCare extends Component {

    render() {
        return (
            <div>
                <div className="main">
                    {this.state.data[0].id}
                </div>
            </div>
        );
    }
}


export default TakeCare;