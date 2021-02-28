import React from 'react';
import './App.css';
import Tabladen from './tabladen.js';
import Image from './image'
import Weekrooster from './weekroosters'
import Klok from './klok';
import Over from './over page/over'
import Logo from './plattegronden/download.png'
import Meer from './meer page/meer'
import Login from './login/login'
import Home from './home'
import './login/login.css'
import RoosterHome from './roosterhome';

export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleSubmitleer = this.handleSubmitleer.bind(this);

    this.state = [{isLoggedIn: false}, {value: ''}, {inputVis: true}, {leerling: false}, {roostermaker: false}];
  }

  handleChangeEmail(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit() {
    const Credentials = require('./login/Credentials.json')
    const index = Credentials[0].inlog.indexOf(this.state.value)
    alert(index)
    if (index !== -1) {
      this.setState({roostermaker: true})
    } else {
      alert('wrong password')
    }
    
  }

  handleSubmitleer() {
    const Credentials = require('./login/Credentials.json')
    const index = Credentials[1].inlog.indexOf(this.state.value)
    alert(index)
    if (index !== -1) {
      this.setState({leerling: true})
    } else {
      alert('wrong password')
    }
  }

  handleLogoutClick() {
    this.setState({leerling: false})
    this.setState({leeraar: false})
    this.setState({roostermaker: false})
  }
  

  render() {
    const leerling = this.state.leerling;
    const roostermaker = this.state.roostermaker;
    let button;
    let home;
    if (leerling) {
      button = "hallo";
      home = <Home />
    } if (roostermaker) {
      button = ""
      home = <RoosterHome />
    } else {
      button =
        <div visibility={!this.state.isLoggedIn} className="LoginContainer">
            <h1>Login</h1>
            <h3>vul hier uw code in</h3>
            <input className="Input" type="text" value={this.state.value} onChange={this.handleChangeEmail} />
            <button className="SignInout" onClick={this.handleChangeEmail, this.handleSubmit}>Leraar</button>
            <button className="SignInout" onClick={this.handleSubmitleer}>Leerling</button>
        </div>
    }

    return (
      <div className="LOginback">
        {button}
        {home}
      </div>
    );
  }
}