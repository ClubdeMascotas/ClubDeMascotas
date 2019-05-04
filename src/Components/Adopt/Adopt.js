import React, { Component } from 'react';
import './Adopt.css';
import Postdata from '../../Components/Data/api.json';
import Card from '../Card/Card';
import Information from '../Information/Information';
import icon1 from '../img/icon1.png';
import icon2 from '../img/icon2.png';
import icon3 from '../img/icon3.png';
import icon4 from '../img/icon4.png';
import Menu from '../Menu/Menu';
import Mascota1 from '../img/mascota1.png';
import Mascota2 from '../img/mascota2.png';
import Mascota3 from '../img/mascota3.png';

class Adopt extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: Postdata,
        }
    }


    render() {
        let dataInformation = this.state.data[0].steps;
        return (
            <div>
                <div className="main-adopt">
                    < Menu />
                    <Information information={dataInformation}
                    />
                    <Card
                        image1={icon1}
                        image2={icon2}
                        image3={icon3}
                        image4={icon4}
                    />
                    <div className="images">
                        <img className="image" alt='' src={Mascota1} />
                        <img className="image" alt='' src={Mascota2} />
                        <img className="image" alt='' src={Mascota3} />
                    </div>
                    <div className="text-container">
                        <div className="text1">
                            {dataInformation.map((dataDetail, index) => {
                                return <div className="row" key={index}>{dataDetail.text1}</div>
                            })}
                        </div>
                        <div className="text2">
                            {dataInformation.map((dataDetail, index) => {
                                return <div className="row" key={index}>{dataDetail.text2}</div>
                            })}
                        </div>
                    </div>
                    {/* <Footer /> */}
                </div>
            </div>
        );
    }
}

export default Adopt;




