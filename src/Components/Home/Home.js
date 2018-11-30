import React, { Component } from 'react';
import imagenLogo from '../img/logo.jpg';
import Menu from '../Menu/Menu';


class Home extends Component {
  

        render() {
            return (
                <div className="main-container">
                    <React.Fragment>
                        <img alt='' src={imagenLogo} />
                        <Menu />
                        <div>Aca va el slider</div>
                        <div>Aca va el footer</div>
                    </React.Fragment>
                </div>
            );
        }
    }

export default Home;

