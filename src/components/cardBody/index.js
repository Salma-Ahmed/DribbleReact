import React, { Component } from "react";
import CardActions from "../cardActions";
import CardOverlay from "../cardOverlay";

class CardBody extends Component {
  render() {
    return (
      <div className="card__img">
        <CardOverlay />
        <CardActions />
      </div>
    );
  }
}

export default CardBody;
