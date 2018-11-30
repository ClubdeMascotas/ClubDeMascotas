import React, { Component } from 'react';
import imagenLogo from '../img/logo.png';
import './Menu.css';

class Menu extends Component {
 
  render() {
  return (
                <div className="main-container">
                    <React.Fragment>
                        <div className="Menu">
                            <div className="links1">
                                <div className="OP">¿CÓMO ADOPTAR?</div>
                                <div className="OP">¿PORQUÉ ADOPTAR?</div>
                            </div>
                                <img alt='' src={imagenLogo} />
                                    <div className="links2">
                                        <div className="OP">CUIDA TU MASCOTA</div>
                                        <div className="OP">VETERINARIAS</div>
                                    </div>
                        </div>
                    </React.Fragment>
                </div>
            );
        }
    }

export default Menu;
