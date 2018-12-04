import React, { Component } from "react";
import UserAreaLoggedOut from "../userAreaLoggedOut";
import UserAreaLoggedIn from "../userAreaLoggedIn";
import { UserConsumer } from "../dribbbles";

class UserArea extends Component {
  render() {
    return (
      <UserConsumer>
        {loggedIn => (
          <div className="f-end">
            {loggedIn ? (
              <UserAreaLoggedIn />
            ) : (
              <UserAreaLoggedOut links={["signup", "signin"]} />
            )}
          </div>
        )}
      </UserConsumer>
    );
  }
}

export default UserArea;
