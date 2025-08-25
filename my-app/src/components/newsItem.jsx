import React, { Component } from 'react'
import cooking from "./cooking.png"

export class newsItem extends Component {



  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
        <>
      <div>
        <div className="card" style={{width: "18rem"}}>
    <img src={!imageUrl?"https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/6d56/live/9b22f5e0-6f28-11f0-af20-030418be2ca5.jpg":imageUrl} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} className="btn btn-outline-danger">Read More</a>
    </div>
</div>
      </div>

    
</>
    )
  }
}

export default newsItem
