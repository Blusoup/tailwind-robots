import React from "react";
import Time from "./Time";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
    };
    setInterval(() => {
      this.setState({
        timer: this.state.timer + 1000,
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <Time ms={this.state.timer} />
      </div>
    );
  }
}

export default Timer;
