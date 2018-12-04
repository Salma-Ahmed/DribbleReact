import React, { Component } from "react";

class Logo extends Component {
  render() {
    return (
      <h1 className="header__logo f-start m-y-0">
        <img src={require("../../images/main-logo.png")} alt="dripple-logo" />
      </h1>
    );
  }
}

export default Logo;
