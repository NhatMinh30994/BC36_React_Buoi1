import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <header className="py-3">
        <div className="container px-lg-5">
          <div className="p-4 p-lg-3 bg-light rounded-3">
            <div className="m-4 m-lg-5">
              <h1 className="display-5 text-capitalize font-weight-normal">A warm welcome!</h1>
              <p className="fs-4 text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates labore accusamus, doloribus, sunt rem consectetur non officia totam dolorum eveniet asperiores unde aliquid! Dignissimos, nemo?
              </p>
              <a className="btn btn-primary btn-lg" href="#!">
                Call to action
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
