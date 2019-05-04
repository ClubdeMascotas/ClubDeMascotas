import React, { Component } from 'react';
import '../TakeCare/TakeCare.css';
import Postdata from '../../Components/Data/api.json';
import Information from '../Information/Information';
import Card from '../Card/Card';
import icon1 from '../img/img1.png';
import icon2 from '../img/img2.png';
import Menu from '../Menu/Menu';

class TakeCare extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: Postdata,
        }
    }

    render() {
        let dataInformation = this.state.data[2];
        return (
            <div>
                <div className="main">
                    < Menu/>
                        <Information
                        className="text1"
                            informationText={dataInformation.informationText1}
                        />
                        <Card
                            image1={icon1}
                            image2={icon2}
                            text={dataInformation.steps}
                        />
                </div>
            </div>
        );
    }
}


export default TakeCare;