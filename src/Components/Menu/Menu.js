import React, { Component } from 'react';
import imagenLogo from '../img/logo.png';
import './Menu.css';
import { Link } from 'react-router-dom';

class Menu extends Component {

    render() {
        return (
            <div className="main-container">
                <React.Fragment>
                    <div className="Menu">
                        <div className="links1">
                            <Link to="/adopt">
                                <div className="OP">¿CÓMO ADOPTAR?</div>
                            </Link>
                            <Link to="/whyadopt">
                                <div className="OP">¿PORQUÉ ADOPTAR?</div>
                            </Link>
                        </div>
                        <Link to="/">
                        <img className="logo" alt='' src={imagenLogo} />
                        </Link>
                        <div className="links2">
                            <Link to="/takecare">
                                <div className="OP">CUIDA TU MASCOTA</div>
                            </Link>
                            <Link to="/veterinary">
                                <div className="OP">VETERINARIAS</div>
                            </Link>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}

export default Menu;
