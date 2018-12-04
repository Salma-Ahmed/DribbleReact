import React, { Component } from "react";
import Logo from "../logo";
import Navigation from "../navigation";
import UserArea from "../userArea";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col">
              <Logo />
              <Navigation links={["dribble", "buckets", "Users", "Lists"]} />
              <UserArea />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
