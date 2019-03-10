import React, { Component } from 'react';
import './whyadopt.css';
import Card from '../Card/Card';

class whyAdopt extends Component {
    render() {
        const { dataInformation } = this.props;
        return (
            <div>
                <div className="main">
                    <Card
                        information={dataInformation} />
                </div>
            </div>
        );
    }
}


export default whyAdopt;