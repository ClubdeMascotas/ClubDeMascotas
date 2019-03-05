import React, { Component } from 'react';
import './whyadopt.css';
import Postdata from '../../Components/Data/api.json';

class whyAdopt extends Component {
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


export default whyAdopt;