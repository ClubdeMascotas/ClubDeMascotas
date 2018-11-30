import React, { Component } from 'react';
//import imagenLogo from '../img/logo.jpg';

class Menu extends Component {
 
  render() {
  return (
                <div className="main-container">
                    <React.Fragment>
                        <div className="links">
                            <div>¿Cómo adoptar?</div>
                            <div>¿Porqué adoptar?</div>
                            <div>Sobre Nosotras</div>
                            <div>Cuidado de mascotas</div>
                            <div>Veterinarias</div>
                        </div>
                    </React.Fragment>
                </div>
            );
        }
    }

export default Menu;
