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
        let dataInformation = this.state.data[0].steps;
        console.log('lo que viene del JSON', dataInformation)
        return (
            <div>
                <div className="main">
                    <Information information={dataInformation.map((dataDetail, index)=>{
                        return <p>{dataDetail[0]}</p>
                    })} />
                    <Card 
                    infodata={dataInformation[0]} />
                </div>
            </div>
        );
    }
}

export default Adopt;




