import React, { Component } from 'react';
import './card.css';


class Card extends Component {
    render() {
        const { infodata } = this.props;

        return (
            <div>
                <div className="main">
                    <div className="image">
                    </div>
                    <div className="text">
                        {infodata}
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;