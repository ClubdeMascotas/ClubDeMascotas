import React, { Component } from 'react';
import './Information.css';
import Menu from '../Menu/Menu';


class Information extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          'id': '1',
          'name': 'comoAdoptar',
          'information': 'acá va la información de como adoptar'
        },
        {
          'id': '2',
          'name': 'porQueAdoptar',
          'information': 'acá va la información de porqué adoptar'
        },
      ],
      show: true,
    };

    this.handleInformation = this.handleInformation.bind(this)
  }


  handleInformation= ()=> {
    const { show } = this.state;
    this.setState({
      show: !show
    });
  }


  render() {
    return (
      <div>
        {this.state.show ? (
          <div className="main">
        {this.state.data.map((dataDetail, index) => {
          return <h1>{dataDetail.information}</h1>
          })}
        </div>
        ) : (
        '')}
      </div>
    )
  }
}


export default Information;


