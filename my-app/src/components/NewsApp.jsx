// src/NewsApp.js
import React, { Component } from "react";
import Nav from "./nav";
import News from "./news";


export default class NewsApp extends Component {
  c = "Ryan";

  render() {
    return (
      <>
        <div>
          <p>Hello {this.c}</p>
        </div>
        <Nav />
        <News />
      </>
    );
  }
}
