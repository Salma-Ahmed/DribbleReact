import React, { Component } from "react";

class Modal extends Component {
  render() {
    return (
      <>
        <header class="modal__header">
          <div class="media d-flex">
            <div class="media__img media__img--large">
              <img
                class="img-responsive modal__designer-img"
                src="images/card2.png"
                alt="designer"
              />
            </div>
            <div class="media__details">
              <h1 class="title title--primary m-y-0 modal__designer-name pay">
                pay junction - paper reciepts
              </h1>
              <h2 class="title title--secondary modal__design-details m-y-0">
                by <span>Eddy Lopanivsjky </span>
                <span>on </span>
                <span>August 20, 2018</span>
              </h2>
            </div>
          </div>
        </header>
        <div class="modal__img">
          <img class="img-responsive" src="images/modal-img.png" alt="design" />
        </div>
        <div class="modal__details">
          <div class="container">
            <div class="row row--3 row--xs row--sm">
              <div class="col col--2">
                <div>
                  <p class="p p--secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque eu rhoncus est, vitae imperdiet tellus. Sed dictum,
                    ipsum eget gravida faucibus, nulla diam commodo magna, sit
                    amet pretium metus elit a nibh.
                  </p>
                </div>
                <div class="modal__comments">
                  <h3 class="title title--primary modal__comments-title">
                    Responses
                  </h3>
                  <div class="media comment">
                    <div class="media__img media__img--medium">
                      <img
                        class="img-responsive"
                        src="images/card.png"
                        alt="response"
                      />
                    </div>
                    <div class="media__details">
                      <h4 class="title title-secondary m-y-0 comment_title">
                        username
                      </h4>
                      <p class="p p--secondary m-y-0 comment__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque eu rhoncus est, vitae imperdiet tellus. Sed
                        dictum, ipsum eget gravida faucibus, nulla diam commodo
                        magna, sit amet pretium metus elit a nibh.
                      </p>
                    </div>
                  </div>
                  <div class="media comment">
                    <div class="media__img media__img--medium">
                      <img
                        class="img-responsive"
                        src="images/card.png"
                        alt="response"
                      />
                    </div>
                    <div class="media__details">
                      <h4 class="title title-secondary m-y-0 comment_title">
                        username
                      </h4>
                      <p class="p p--secondary m-y-0 comment__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque eu rhoncus est, vitae imperdiet tellus. Sed
                        dictum, ipsum eget gravida faucibus, nulla diam commodo
                        magna, sit amet pretium metus elit a nibh.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <p>lorem ipsum </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
