import React, { Component } from "react";

class CardActions extends Component {
  render() {
    return (
      <ul className="card__react list--inline text-end">
        <li>
          <a className="react react--views" href=":;">
            <span className="react__count">4,234</span>
            <span className="visually-hidden">views</span>
          </a>
        </li>
        <li>
          <a className="react react--comments" href=":;">
            <span className="react__count">23</span>
            <span className="visually-hidden">comments</span>
          </a>
        </li>
        <li>
          <a className="react react--likes" href=":;">
            <span className="react__count">3</span>
            <span className="visually-hidden">likes</span>
          </a>
        </li>
      </ul>
    );
  }
}

export default CardActions;
