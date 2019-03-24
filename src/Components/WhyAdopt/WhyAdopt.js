import React, { Component } from 'react';
import './whyadopt.css';
import Card from '../Card/Card';
import icon1 from '../img/foto1.png';
import icon2 from '../img/foto2.png';
import icon3 from '../img/foto3.png';
import Postdata from '../../Components/Data/api.json';
import Information from '../Information/Information';
import { Link } from 'react-router-dom';
import imagenLogo from '../img/logo.png';



class whyAdopt extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: Postdata,
        }
    }

    render() {
        let dataInformation = this.state.data[1];
        return (
            <div>
                <div className="main">
                    <Link to="/">
                        <img className="image-logo" alt='' src={imagenLogo} />
                    </Link>
                    <Card
                        image1={icon1}
                        image2={icon2}
                        image3={icon3}
                        text={dataInformation.steps}
                    />
                    <Information
                        informationText={dataInformation.informationText1}
                        informationText2={dataInformation.informationText2}
                        informationText3={dataInformation.informationText3}
                    />
                </div>
            </div>
        );
    }
}


export default whyAdopt;