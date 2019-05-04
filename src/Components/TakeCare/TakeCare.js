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
                <div className="main-take-care">
                    < Menu />
                    {"Accedé a la lista de cuidados básicos para tu mascota"}
                    <div className="image-container">
                        <img className="image" src={icon1} alt="mascota">
                        </img>
                        <img className="image" src={icon2} alt="mascota">
                        </img>
                    </div>
                </div>
            </div>
        );
    }
}


export default TakeCare;