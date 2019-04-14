import React, { Component } from 'react';
import './WhyAdopt.css';
import Card from '../Card/Card';
import icon1 from '../img/foto1.png';
import icon2 from '../img/foto2.png';
import icon3 from '../img/foto3.png';
import Postdata from '../../Components/Data/api.json';
import Information from '../Information/Information';
import Menu from '../Menu/Menu';
import '../Menu/Menu.css';



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
                    <Menu />
                    </div>
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
        );
    }
}


export default whyAdopt;