import React, { Component } from 'react';
import './Card.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../Home/Home';


class Card extends Component {
    render() {
        let { image1, image2, image3, image4 } = this.props;
        return (
            <div>
                <div className="main-card">
                    <div className="image">
                        <img className="image-small" src={image1} alt="mascota">
                        </img>
                        <img className="image-small" src={image2} alt="mascota">
                        </img>
                        <img className="image-small" src={image3} alt="mascota">
                        </img>
                        <img className="image-small" src={image4} alt="mascota">
                        </img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;