import React, { Component } from 'react';
import imagenLogo from '../img/logo.jpg';



    class Products extends Component {
        constructor(props) {
            super(props)

        }
        componentDidMount() {
        }

        render() {
            return (
                <div className="main-container">
                    <React.Fragment>
                        <img src={imagenLogo} />
                        <div className="links">
                            <div>¿Cómo adoptar?</div>
                            <div>¿Porqué adoptar?</div>
                            <div>Sobre Nosotras</div>
                            <div>Cuidado de mascotas</div>
                            <div>Veterinarias</div>
                        </div>
                        <div>Aca va el slider</div>
                        <div>Aca va el footer</div>
                    </React.Fragment>
                </div>
            );
        }
    }

export default Products;

