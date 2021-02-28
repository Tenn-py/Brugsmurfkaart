import React, { Component } from 'react';
import './App.css'
import Times from './roosters/times';
import IMG_00 from './images/IMG_00.jpg'
import IMG_01 from './images/IMG_01.jpg'
import IMG_02 from './images/IMG_02.jpg'

class Image extends Component {
    constructor(){
        super();

        this.onCLick2de = this.onCLick2de.bind(this)
        this.onCLick1de = this.onCLick1de.bind(this)
        this.onClickbg = this.onClickbg.bind(this)

        const img0 = require('./images/IMG_00.jpg');
        const img1 = require('./images/IMG_01.jpg');
        const img2 = require('./images/IMG_02.jpg');

        this.state = {
            index: 0,
            imgList: [IMG_00, IMG_01, IMG_02]
        }
    }

    onCLick2de() {
        this.setState({
            index: 2
        })
    }

    onCLick1de() {
        this.setState({
            index: 1
        })
    }

    onClickbg() {
        this.setState({
            index: 0
        })
    }

    render(){
        return (
            <div className="">
                <img className="Image" src={this.state.imgList[this.state.index]} alt=""/><br />
                <button className="Button1" onClick={this.onCLick2de}>2de</button>
                <button className="Button2" onClick={this.onCLick1de}>1de</button>
                <button onClick={this.onClickbg} className="Button3">bg</button>
            </div>
        )
    }

}

export default Image;