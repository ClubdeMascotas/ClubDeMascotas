import React, { Component } from 'react';
import './Information.css';
import '../Menu/Menu.css';




class Information extends Component {
  render() {
    const { informationText, informationText2, informationText3 } = this.props;
    return (
      <div>
        <div className="main">
          <div className="text">
            {informationText}  
          </div>
          <div className="text-two">
            {informationText2}
          </div>
          <div className="text-three">
            {informationText3}
          </div>

        </div>
      </div>
    )
  }
}

export default Information;


