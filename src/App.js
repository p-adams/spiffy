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
  makeGithubRequest = e => {
    e.preventDefault();
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
  };
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-Title">Spiffy</h1>
        </header>
        <div className="resultsContainer">
          {this.state.resultsDidLoad ? (
            <RepoResults
              results={this.state.results}
              query={this.state.query}
              language={this.state.language}
            />
          ) : (
            undefined
          )}
        </div>
        <form onSubmit={e => this.makeGithubRequest(e)}>
          <label htmlsfor="topic">Topic (ex: React, Lodash, Kotlin)</label>
          <input
            type="text"
            value={this.state.query}
            onChange={e => this.setState({ query: e.target.value })}
            placeholder="Enter topic..."
          />
          <label htmlsfor="targetLanguage">
            Target language (ex: JavaScript, Java, Python, etc)
          </label>
          <input
            type="text"
            value={this.state.language}
            onChange={e => this.setState({ language: e.target.value })}
            placholder="Enter language"
          />
          <button>Find repos</button>
        </form>
      </div>
    );
  }
}

export default App;
