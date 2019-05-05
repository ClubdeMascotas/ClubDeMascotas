import './Footer.css';
import React, { Component } from 'react';
import iconoig from '../img/iconoig.png'
import iconomail from '../img/iconomail.png'


class Footer extends Component {
    render() {
        return (
            <div className= "main-footer">
            <div className= "icons">
                <img className="ig" src={iconoig} /> {'@clubdemascotas.ar'}
                    <img className="mail" src={iconomail}/> {'clubdemascotas@gmail.com'}
                    </div>
                    
            </div>
        )}
}

export default Footer;
