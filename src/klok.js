import React, { Component } from 'react';
import './App.css'
import { render } from 'react-dom';

   

class Klok extends Component {
  constructor() {
      super();
      var today = new Date(),
      time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
      this.state = {
        currentTime: time
      }
  }
   
  render() {
    return (
      <div className="KlokPos">
        <p>
          { this.state.currentTime }
        </p>
      </div>
    );
  }
}

export default Klok;