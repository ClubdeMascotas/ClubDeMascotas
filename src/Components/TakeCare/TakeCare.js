import React, { Component } from 'react';
import '../TakeCare/takecare.css';
import Postdata from '../../Components/Data/api.json';
import Information from '../Information/Information';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import icon1 from '../img/foto4.png';
import icon2 from '../img/foto6.png';
import imagenLogo from '../img/logo.png';

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
                    <Link to="/">
                        <img className="image-logo" alt='' src={imagenLogo} />
                    </Link>
                    <Information
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