import React, { Component } from "react";

class Button extends Component {
  render() {
    const { size, color, text } = this.props;
    return (
      <button className={`btn btn--${size} btn--${color} d-block`}>
        {text}
      </button>
    );
  }
}

export default Button;
