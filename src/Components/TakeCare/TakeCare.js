import React, { Component } from 'react';
import '../TakeCare/takecare.css';
import Postdata from '../../Components/Data/api.json';

class TakeCare extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: Postdata,
        }
    }

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