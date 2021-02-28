import React from 'react';
import './login.css';
import { useState } from 'react';
import DevTools from './devTools';

export default class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = [{value: ''}, {password: ''}];

      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeEmail(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit() {
        const Credentials = require('./Credentials.json')
        const index = Credentials[0].inlog.indexOf(this.state.value)
        if (index === 0) {
            alert('succesvol ingelogd als roostermaker')
            return <DevTools/>;
        } if (index === 1) {
            alert('succesvol ingelogd als leerling')
        } if (index === 2) {
            alert('succesvol ingelogd als leraar')
        }
    }

  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
                <div className="LoginContainer">
                    <h1>Login</h1>
                    <h3>vul hier uw gegevens in</h3>
                    <input className="Input" type="text" value={this.state.value} onChange={this.handleChangeEmail} />
                </div>          
          </label>
          <input className="SignIn" type="submit" value="Login" />
        </form>
      );
    }
  }
