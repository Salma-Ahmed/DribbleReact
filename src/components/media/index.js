import React, { Component } from "react";

class Media extends Component {
  render() {
    return (
      <div className="media">
        <div className="media__img media__img--small f-start">
          <img
            className="img-responsive"
            src={require("../../images/card.png")}
            alt="dribble-card-onwer"
          />
        </div>
        <div className="media__details">
          <p className="card__designer-name m-y-0">somename</p>
        </div>
      </div>
    );
  }
}

export default Media;
