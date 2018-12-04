import React, { Component } from "react";
import LinksList from "../linksList";

class UserAreaLoggedOut extends Component {
  render() {
    const { links } = this.props;
    return (
      <ul className="header__user-area list list--inline d-inline-block">
        <LinksList links={links} />
      </ul>
    );
  }
}

export default UserAreaLoggedOut;
