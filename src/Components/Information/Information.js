import React, { Component } from 'react';
import './information.css';
import Postdata from '../../Components/Data/api.json'


class Information extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: Postdata,
    }
  }


  render() {
    const { information } = this.props;
    console.log('hooolis ', information)
    return (
      <div>
        <div className="main">
          <div className="text">
            {information.information}
          </div>
          <div className="text-two">
            {information.information2}
          </div>
        </div>
      </div>
    )
  }
}

export default Information;


