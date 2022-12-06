import React, { Component } from "react";
import Item from "./Item";

export default class List extends Component {
  render() {
    return (
      <section className="pt-0">
        <div className="container px-lg-5">
          {/* Page Features*/}
          <div className="row gx-lg-5">
            <div className="col-lg-6 col-xl-3 mb-3">
              <Item />
            </div>
            <div className="col-lg-6 col-xl-3 mb-3">
              <Item />
            </div>
            <div className="col-lg-6 col-xl-3 mb-3">
              <Item />
            </div>
            <div className="col-lg-6 col-xl-3 mb-3">
              <Item />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
