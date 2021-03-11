import { render } from '@testing-library/react'
import React, { useState } from 'react'
import './creater.css'

export default class newMaandag extends React.Component {
    constructor(props) {
        super(props)
        this.Submit = this.Submit.bind(this)
        this.Handlechange1 = this.Handlechange1.bind(this)
        this.Handlechange2 = this.Handlechange2.bind(this)
        this.Handlechange3 = this.Handlechange3.bind(this)
        this.Handlechange4 = this.Handlechange4.bind(this)
        this.Handlechange5 = this.Handlechange5.bind(this)
        this.Handlechange6 = this.Handlechange6.bind(this)
        this.Handlechange7 = this.Handlechange7.bind(this)
        this.Handlechange8 = this.Handlechange8.bind(this)
        this.state = {eerste: "", tweede: "", derde: "", vierde: "", vijfde: "", zesde: "", zevende: "", achtste: ""}
    }

    Handlechange1(event) {
        this.setState({eerste: event.target.value})
    }

    Handlechange2(event) {
        this.setState({tweede: event.target.value})
    }
    
    Handlechange3(event) {
        this.setState({derde: event.target.value})
    }

    Handlechange4(event) {
        this.setState({vierde: event.target.value})
    }

    Handlechange5(event) {
        this.setState({vijfde: event.target.value})
    }

    Handlechange6(event) {
        this.setState({zesde: event.target.value})
    }

    Handlechange7(event) {
        this.setState({zevende: event.target.value})
    }

    Handlechange8(event) {
        this.setState({achtste: event.target.value})
    }

    Submit() {
        console.log(this.state.eerste)
        console.log(this.state.tweede)
        console.log(this.state.derde)
        console.log(this.state.vierde)
        console.log(this.state.vijfde)
        console.log(this.state.zesde)
        console.log(this.state.zevende)
        console.log(this.state.achtste)
    }

    render() {
        return(
            <div className="Day">
                <input className="input" type="text" onChange={this.Handlechange1} value={this.state.eerste}/>
                <input className="input" type="text" onChange={this.Handlechange2} value={this.state.tweede}/>
                <input className="input" type="text" onChange={this.Handlechange3} value={this.state.derde}/>
                <input className="input" type="text" onChange={this.Handlechange4} value={this.state.vierde}/>
                <input className="input" type="text" onChange={this.Handlechange5} value={this.state.vijfde}/>
                <input className="input" type="text" onChange={this.Handlechange6} value={this.state.zesde}/>
                <input className="input" type="text" onChange={this.Handlechange7} value={this.state.zevende}/>
                <input className="input" type="text" onChange={this.Handlechange8} value={this.state.achtste}/>
                <button className="Submit" onClick={this.Submit}>
                    submit
                </button>
            </div>
        )
    }
}