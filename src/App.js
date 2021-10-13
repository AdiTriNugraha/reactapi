import React, { Component } from 'react';
import NavbarComponent from './Component/NavbarComponent.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import JumbotronComponent from './Component/JumbotronComponent.jsx';
import TableComponent from './Component/TableComponent.jsx';


export default class App extends Component {
  state = {
    tittle: "Adi Tri Nugraha",
    user: [
      {
        id: 1,
        nama: "Adi 3 Nugraha",
        alamat: "tasik",
        umur: 18,
        nohp: "085220809619"
      },
      {
        id: 2,
        nama: "Adi",
        alamat: "singaparna",
        umur: 18,
        nohp: "08432587987"
      },
      {
        id: 3,
        nama: "Adi 3 ",
        alamat: "cisalak",
        umur: 18,
        nohp: "08876587887"
      }
    ]
  }
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent tittle={this.state.tittle} />
        <TableComponent  user={this.state.user}/>
      </div>
    )
  }
}