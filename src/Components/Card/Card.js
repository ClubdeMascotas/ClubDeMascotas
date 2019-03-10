import React, { Component } from 'react';
import './card.css';
// import icon1 from '../img/icon1.png';
// import icon2 from '../img/icon2.png';
// import icon3 from '../img/icon3.png';
// import icon4 from '../img/icon4.png';
import Information from '../Information/Information';


class Card extends Component {
    render() {
        let { information } = this.props;
        console.log('acaaaa ', information[0].steps)


        return (
            <div>
                <div className="main">
                    {/* <div className="image">
                        <img src={icon1} alt="mascota">
                        </img>
                        <img src={icon2} alt="mascota">
                        </img>
                        <img src={icon3} alt="mascota">
                        </img>
                        <img src={icon4} alt="mascota">
                        </img></div> */}


                    <div className="image">
                        {information.images.map((image, index) => {
                            return <img src={image.imagePath} className="imagePath" key={index}></img>
                        })}
                    </div>
                    <div className="text">
                        {information.steps.map((dataDetail, index) => {
                            return <div className="row" key={index}>{dataDetail.textpreg}</div>
                        })}
                    </div>
                    <div className="text">
                        {information.steps.map((dataDetail, index) => {
                            return <div className="row" key={index}>{dataDetail.text}</div>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;