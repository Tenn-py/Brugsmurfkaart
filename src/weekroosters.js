import React, { Component } from 'react';
import Mroostertime from './roosters/mroostertime';
import Droostertime from './roosters/droostertime';
import Wroostertime from './roosters/wroostertime';
import Doroostertime from './roosters/doroostertime';
import Vroostertime from './roosters/vroostertime';
import './App.css'

class Weekrooster extends Component {
    constructor(){
        super();

        this.onClickForward = this.onClickForward.bind(this)
        this.onCLickBack = this.onCLickBack.bind(this)
        this.Maandag = this.Maandag.bind(this)
        this.Dinsdag = this.Dinsdag.bind(this)

        this.state = {
            index: 0,
            imgList: ["M", "D", "W", "Do", "V"]

        };
    }

    onCLickBack() {
        if(this.state.index - 1 === -1) {
            this.setState({
                index: this.state.imgList.length - 1
            })
        } else {
            this.setState({
                index: this.state.index - 1
            })
        }
    }

    onClickForward() {
        if (this.state.index + 1 === this.state.imgList.length) {
            this.setState({
                index: 0
            })
        } else {
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    Maandag() {
        if (this.state.index === 0) {
            return <Mroostertime />;
        } else {
            return(
                <div>
                    <p></p>
                </div>
            )
        }
    }

    Dinsdag() {
        if (this.state.index === 1) {
            return <Droostertime />;
        } else {
            return(
                <div>
                    <p></p>
                </div>
            )
        }
    }

    Woensdag() {
        if (this.state.index === 2) {
            return <Wroostertime />;
        } else {
            return(
                <div>
                    <p></p>
                </div>
            )
        }
    }

    Donderdag() {
        if (this.state.index === 3) {
            return <Doroostertime />;
        } else {
            return(
                <div>
                    <p></p>
                </div>
            )
        }
    }

    Vrijdag() {
        if (this.state.index === 4) {
            return <Vroostertime />;
        } else {
            return(
                <div>
                    <p></p>
                </div>
            )
        }
    }

            
    render(){
        return(
            <div className="Helerooster">
                {this.Maandag()}
                {this.Dinsdag()}
                {this.Woensdag()}
                {this.Donderdag()}
                {this.Vrijdag()}
                <button onClick={this.onCLickBack} className="Vorige">Gisteren</button>
                <button onClick={this.onClickForward} className="Volgende">Morgen</button>
            </div>
        );
    }
}

export default Weekrooster;