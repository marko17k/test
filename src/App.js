import React from 'react';
import logo from './logo.svg';
import Welcome from "./Welcome";
import './App.css';
import { render } from 'react-dom';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      news: [{
        title: "1",
        description: "description 1",
      }]
    }
    
    // this.news = [{
    //   title: "1",
    //   description: "test",
    // },
    // {
    //   title: "2",
    //   description: "test",
    // },
    // {
    //   title: "3",
    //   description: "test",
    // }];
  }

  render() {

    const news = this.state.news.map((newsItem) => {
      return <Welcome name={newsItem.title}
                      key={newsItem.title}
                      title={newsItem.title}
                      description={newsItem.description}
                      propertyKojiNecuNikadKOristiti={"a"}/>
    })



    return (
      <div className="App">
        <header className="App-header"></header>
      {
        news
      }

      <button onClick={this.addItem}>add</button>
      <button onClick={this.deleteItem}>delete</button>
      <button onClick={this.modifyFirstItem}>modify</button>
      

      </div>
    );
  }

  addItem = () => {
    this.state.news.push({
      title: this.state.news.length + 1,
      description: "test",
    });
    this.setState({
      news: this.state.news
    });
  }

  deleteItem = () => {
    this.state.news.pop();
    this.setState({
      news: this.state.news
    });
  }

  modifyFirstItem = () => {
    this.state.news[0].description = "promenjen";
    this.setState({
      news: this.state.news
    });
  }
}

export default App;
