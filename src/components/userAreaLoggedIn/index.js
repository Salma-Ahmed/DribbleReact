import React, { Component } from "react";

class UserAreaLoggedIn extends Component {
  render() {
    return (
      <div>
        <div className="media d-flex">
          <div className="media__img media__img--medium">
            <img
              className="img-responsive"
              src={require("../../images/card2.png")}
              alt="user"
            />
          </div>
          <div className="media__dets">
            <form method="">
              <label className="visually-hidden" htmlFor="search">
                Search
              </label>
              <input type="text" name="search" id="search" />
              <button> </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UserAreaLoggedIn;
