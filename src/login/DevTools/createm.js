import React, {useState, useEffect} from 'react'
import './DevTools.css'
import Loading1 from './loading';
import Maandag from './alldaystocreate/maandag'
import NewMaandag from './alldaystocreate/newmaandag';

export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    let home;
    let create;
    if (isLoggedIn) {
      button = <button onClick={this.handleLogoutClick}>Maandag</button>;
      home = <Maandag />
      create = <NewMaandag />
    } else {
      button = <button onClick={this.handleLoginClick}>Maandag</button>;
      home = ""  
      create = ""    
    }

    return (
      <div className="Total">
        <div className="days">
          {button}
        </div>
        <div className="CreateDay">
          {home}
          {create}
        </div>
      </div>
    );
  }
}