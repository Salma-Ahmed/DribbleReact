import React, { Component } from "react";
import Button from "../button";
import { UserConsumer } from "../dribbbles";

class PageActions extends Component {
  render() {
    return (
      <UserConsumer>
        {loggedIn => (
          <div className="actions">
            {loggedIn ? (
              <Button size="lg" color="outline" text="Load more" />
            ) : (
              <div className="d-block">
                <Button size="lg" color="pink" text="Sign up to continue" />
                <Button size="lg" color="transparent" text="or sign in" />
              </div>
            )}
          </div>
        )}
      </UserConsumer>
    );
  }
}

export default PageActions;
