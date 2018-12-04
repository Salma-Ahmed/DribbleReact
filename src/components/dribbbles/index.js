import React, { Component } from "react";
import CardsList from "../cardsList";
import { Helmet } from "react-helmet";
import PageActions from "../pageActions";
import Footer from "../footer";
import Header from "../header";

export const UserContext = React.createContext();
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

class Dribbles extends Component {
  state = {
    loggedIn: false
  };
  render() {
    const { loggedIn } = this.state;
    return (
      <>
        <UserProvider value={loggedIn}>
          <Helmet htmlAttributes={{ dir: "ltr" }} />
          <Header />
          <div className="container">
            <CardsList />
            <PageActions />
          </div>
          <Footer />
        </UserProvider>
      </>
    );
  }
}

export default Dribbles;
