import React, { Component } from "react";
import Link from "../link";
import uuid from "uuid";

class LinksList extends Component {
  render() {
    const { links } = this.props;
    return links.map(link => (
      <li key={uuid()}>
        <Link text={link} />
      </li>
    ));
  }
}

export default LinksList;
