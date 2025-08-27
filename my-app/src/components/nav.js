import React, { Component } from "react";
import "./Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <>
      <nav className="navbar">
        <div className="navbar-logo">NewsApp</div>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div>
          <a href="https://www.google.com" className="btn-primary">Get Started</a>
        </div>
      </nav>
      </>
    );
  }
}
