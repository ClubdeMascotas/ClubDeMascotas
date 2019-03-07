import React, { Component } from 'react';
import imagenSan from '../img/San.jpg'
import Menu from '../Menu/Menu';
import Information from '../Information/Information'
import './home.css';


class Home extends Component {
  

        render() {
            return (
                <div className="main-container">
                    <React.Fragment>
                            <Menu />
                            <Information />
                                <div className="Slider"> <img src={imagenSan}/> </div>
                                <div className="Footer"></div>
                    </React.Fragment>
                </div>
            );
        }
    }

export default Home;

