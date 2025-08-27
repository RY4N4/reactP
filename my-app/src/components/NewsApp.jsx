import React, { Component } from 'react'

export default class NewsApp extends Component {
    c = "Ryan"
  render() {
    return (
      <div>
        <p>hello {this.c}</p>
      </div>
    )
  }
}
