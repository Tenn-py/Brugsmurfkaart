import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './login.css'
import Text from './text'
import DevTools from './devTools'

export default class Login extends Component {
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
        alert(index)
        
    }

    render() {
        return (
                    <div className="LoginContainer">
                        <h1>Login</h1>
                        <h3>vul hier uw code in</h3>
                        <input className="Input" type="text" value={this.state.value} onChange={this.handleChangeEmail} />
                        <button className="SignIn" onClick={this.handleChangeEmail}>Login</button>
                    </div>
        );
    }
}