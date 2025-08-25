import React, { Component } from "react";
import NewsItem from "./newsItem";
import sampleData from "./sample.json"

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles : [],
            loading : false
        }
    }

    async componentDidMount(){
        let url ="https://newsapi.org/v2/everything?q=apple&from=2025-08-23&to=2025-08-23&sortBy=popularity&apiKey=8ca845f321994bf08bb068585f795bd2";
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({articles : parsedData.articles})
    }

  render() {
    return (
      <>
        <div className="container my-4"> 
          <h1 className="contain my-4">News By ~ Ryan</h1>
          <div className="row g-2">
            {this.state.articles && this.state.articles.map ((element,index)=>{
            return (
            <div className="col-md-3" key={index}>
              <NewsItem 
                title={element.title ? element.title.slice(0, 22) : "No Title"}
                description={element.description ? element.description.slice(0, 60) : "No Description"}
                imageUrl={element.urlToImage || "https://via.placeholder.com/150"}

               newsUrl={element.url}
               />
            </div>
            )
            })}
          </div>
        </div>
      </>
    );
  }
}

export default News;
