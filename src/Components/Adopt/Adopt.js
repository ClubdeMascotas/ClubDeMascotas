import React, { Component } from 'react';
import './adopt.css';
import Postdata from '../../Components/Data/api.json';
import Card from '../Card/Card';
import Information from '../Information/Information';


class Adopt extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: Postdata,
        }
    }


    render() {
        let dataInformation = this.state.data[0];
        console.log('lo que viene del JSON', dataInformation)
        return (
            <div>
                <div className="main">
                    <Information information={dataInformation.steps.map((dataDetail, index)=>{
                        return <div className="row" key={index}>{dataDetail.text}</div>
                    })} />
                    <Card 
                    infodata={'hola'} />
                </div>
            </div>
        );
    }
}

export default Adopt;




