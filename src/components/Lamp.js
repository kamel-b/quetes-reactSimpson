
import React, { Component } from 'react';
import logo from '../logo.svg'
import './Lamp.css';


class Lamp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: props.on,
      working: props.working

    };
    console.log(this.state.on)

  }
  handleClick = () => {
    return this.setState({ on: !this.state.on });
  }
     workClick = () => {
       return this.setState({
         working: !this.state.working
       })
     }
 
  render() {
    const light = this.state.on ? 'on' : 'off';
    console.log( light)
    const work = this.state.working ? "working" : "notWorking";
    console.log(work)

    return (
      <div>
      <div className="Lamp">
        <button className={light} onClick={this.handleClick}>{light.toUpperCase()}</button>
        <figure className={light} />
      </div>
          <div className="Work">
            <button className={work} onClick={this.workClick}>{work}</button>
            <img src={logo} className ={work} alt=""/>
          </div>
      </div>
     
    );
  }
}

export default Lamp;