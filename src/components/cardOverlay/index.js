import React, { Component } from "react";

class CardOverlay extends Component {
  render() {
    return (
      <div className="card__img">
        <a className="d-block" data-fancybox data-src="#modal" href=":;">
          <img
            className="img-responsive"
            src={require("../../images/card.png")}
            alt="main-img"
          />
          <div className="card__details animate">
            <h3 className="title title--secondary">Dribble title</h3>
            <p className="p p--secondary m-y-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              porta a massa auctor pharetra.
            </p>
            <p className="p p--small card--da">August 30, 2018</p>
          </div>
        </a>
      </div>
    );
  }
}

export default CardOverlay;
