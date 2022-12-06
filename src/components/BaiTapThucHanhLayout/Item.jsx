import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="card text-center">
        <div className="card-header text-muted p-5">500 x 325</div>
        <div className="card-body text-center pb-5">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, alias.
          </p>
        </div>
        <div className="card-footer">
          <a href="#" className="btn btn-primary border-top">
            Find Out More!
          </a>
        </div>
      </div>
    );
  }
}
