import React, { Component } from "react";
import LinksList from "../linksList";
class Navigation extends Component {
  render() {
    const { links } = this.props;
    return (
      <nav className="header__nav f-start">
        <ul className="list list--inline">
          <LinksList links={links} />
        </ul>
      </nav>
    );
  }
}

export default Navigation;
