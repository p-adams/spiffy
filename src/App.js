import React, { Component } from "react";
import axios from "axios";
import RepoResults from "./RepoResults";
import "./App.css";

class App extends Component {
  state = {
    results: "",
    language: "JavaScript",
    query: "Redux",
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
      <div className="container h-screen mx-auto border-red-darker border-4">
        <div className="flex border-red-light border-2">
          <div className="w-1/5 bg-grey-light h-12" />
          <div className="w-3/5 bg-grey-dark">
            <h1>Spiffy</h1>
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
            <form
              className="w-full max-w-xs"
              onSubmit={e => this.makeGithubRequest(e)}
            >
              <div className="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label
                    className="block text-yellow font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlfor="topic"
                  >
                    Topic
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    class="bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-purple rounded w-full py-2 px-4 text-grey-darker"
                    type="text"
                    value={this.state.query}
                    placeholder="Enter topic..."
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label className="block text-yellow font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Language
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    class="bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-purple rounded w-full py-2 px-4 text-grey-darker"
                    type="text"
                    value={this.state.language}
                    placeholder="Enter language..."
                  />
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3" />
                <div className="md:w-2/3">
                  <button
                    className="shadow bg-purple hover:bg-purple-light text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Search repos
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="w-1/5 bg-gray-darker h-12" />
        </div>
      </div>
    );
  }
}

export default App;
