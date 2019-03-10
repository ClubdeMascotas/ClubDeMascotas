import React, { Component } from 'react';
import './adopt.css';
import Postdata from '../../Components/Data/api.json';
import Card from '../Card/Card';
import Information from '../Information/Information';
import image1 from '../img/mascota1.png';
import image2 from '../img/mascota2.png';
import image3 from '../img/mascota3.png';
import Footer from '../Footer/Footer'

class Adopt extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: Postdata,
        }
    }


    render() {
        let dataInformation = this.state.data;
        // console.log('lo que viene del JSON', dataInformation)
        return (
            <div>
                <div className="main">
                    {/* <Information information={dataInformation.steps.map((dataDetail, index)=>{
                        return <div className="row" key={index}>{dataDetail.text}</div>
                    })} /> */}
                    <Information information={dataInformation[0]} />
                    <Card 
                    information={dataInformation[0]} />
                    {/* <div className="images">
                    <img src={image1} alt="mascota"></img>
                    <img src={image2} alt="mascota"></img>
                    <img src={image3} alt="mascota"></img>
                    </div> */}
                    {/* <Footer /> */}
                </div>
            </div>
        );
    }
}

export default Adopt;




