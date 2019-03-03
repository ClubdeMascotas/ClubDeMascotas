import React, { Component } from 'react';
import imagenSan from '../img/San.jpg'
import Menu from '../Menu/Menu';
import Information from '../Information/Information'
import './Home.css';


class Home extends Component {
  

        render() {
            return (
                <div className="main-container">
                    <React.Fragment>
                            <Menu />
                                <div className="Slider"> <img src={imagenSan}/> </div>
                                <div className="Footer"></div>
                            <Information />
                    </React.Fragment>
                </div>
            );
        }
    }

export default Home;

