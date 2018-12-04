import React, { Component } from "react";

class Link extends Component {
  render() {
    const { text } = this.props;
    return <a href="dribble.html">{text}</a>;
  }
}

export default Link;
