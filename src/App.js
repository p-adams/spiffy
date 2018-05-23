import React, { Component } from "react";
import axios from "axios";
import RepoResults from "./RepoResults";
import "./App.css";

class App extends Component {
  state = {
    results: "",
    language: "JavaScript",
    query: "React",
    resultsDidLoad: false
  };
  componentDidMount() {
    axios
      .get(
        `https://api.github.com/search/issues?q=${
          this.state.query
        }+label:good-first-issue+language:${
          this.state.language
        }&sort=created&order=asc`,
        {
          headers: { Accept: "application/vnd.github.symmetra-preview+json'" }
        }
      )
      .then(githubResults => {
        this.setState({
          results: githubResults.data.items,
          resultsDidLoad: true
        });
      });
  }
  render() {
    return (
      <div className="App">
        <header>Spiffy</header>
        {this.state.resultsDidLoad ? (
          <RepoResults results={this.state.results} />
        ) : (
          undefined
        )}
      </div>
    );
  }
}

export default App;
