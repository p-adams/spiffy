import React, { Component } from "react";
import axios from "axios";
import RepoResults from "./RepoResults";
import "./App.css";

class App extends Component {
  state = {
    results: [],
    language: "",
    query: "",
    labels: []
  };
  componentDidMount() {
    axios
      .get(
        `https://api.github.com/search/issues?q=${this.state.query}+label:${
          this.state.labels[0]
        }+language:${this.state.language}&sort=created&order=asc`,
        {
          headers: { Accept: "application/vnd.github.symmetra-preview+json'" }
        }
      )
      .then(res => console.log(res.data));
  }
  render() {
    return (
      <div className="App">
        <header>Spiffy</header>
        <RepoResults />
      </div>
    );
  }
}

export default App;
