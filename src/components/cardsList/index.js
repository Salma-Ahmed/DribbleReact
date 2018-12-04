import React, { Component } from "react";
import Card from "../card";
import uuid from "uuid";

class CardsList extends Component {
  render() {
    const cards = [];
    for (let index = 0; index < 12; index++) {
      cards.push(
        <li className="card col" key={uuid()}>
          <Card />
        </li>
      );
    }
    return (
      <ul className="cards row row--4 row--xs row--sm--2 row--md--3">
        {cards}
      </ul>
    );
  }
}

export default CardsList;
