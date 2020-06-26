import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      start: false
    };
    setInterval(() => {
      {
        this.state.start &&
        this.setState({
          time: this.state.time + 1
        })
      }
    }, 1000)
  }
  hendleTimer = () => {
    this.setState({
      start: !this.state.start

    })
  }
  reset = () => {
    this.setState({
      time:0,
      start: false
    })
  }
  render() {
    var s = this.state.time % 60
    var m = Math.floor((this.state.time / 60) % 60)
    var h = Math.floor((this.state.time / 3600) % 24)
    return (
      <div className='timer'>
        <div className='time'>  <h2 className='h'>{h.toString().padStart(2, '0')}: </h2> <h2 className='m'>{m.toString().padStart(2, '0')} </h2><h2 className='s'>:{s.toString().padStart(2, '0')}</h2></div>
        <button onClick={this.hendleTimer} className='button_start'> {this.state.start ? 'Pause' : 'Start'}</button>
        <button onClick={this.reset} className='button_reset'>Reset</button>
      </div>
    );
  }
}

export default Timer;
