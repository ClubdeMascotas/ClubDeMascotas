import React, { Component } from 'react';
import './card.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../Home/Home';


class Card extends Component {
    render() {
        let { image1, image2, image3, image4, text } = this.props;
        return (
            <div>
                <div className="main">
                    <div className="image">
                        <img src={image1} alt="mascota">
                        </img>
                        <img src={image2} alt="mascota">
                        </img>
                        <img src={image3} alt="mascota">
                        </img>
                        <img src={image4} alt="mascota">
                        </img>
                    </div>

                    <div className="text">
                        {text.map((dataDetail, index) => {
                            return <div className="row" key={index}>{dataDetail.text1}</div>
                        })}
                    </div>
                    <div className="text">
                        {text.map((dataDetail, index) => {
                            return <div className="row" key={index}>{dataDetail.text2}</div>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;