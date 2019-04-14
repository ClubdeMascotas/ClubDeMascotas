import React, { Component } from 'react';
import './Veterinary.css';
import Postdata from '../../Components/Data/api.json';


class Veterinary extends Component {


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

export default Veterinary;