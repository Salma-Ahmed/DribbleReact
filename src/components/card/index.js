import React, { Component } from "react";
import Media from "../media";
import CardBody from "../cardBody";

class Card extends Component {
  render() {
    return (
      <>
        <div className="card__comp">
          <CardBody />
        </div>
        <Media />
      </>
    );
  }
}

export default Card;
