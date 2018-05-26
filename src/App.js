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
        <div className="flex h-full border-red-light border-2">
          <div className="w-1/5 bg-grey-light" />
          <div className="w-3/5 bg-grey-dark">
            <h1 className="text-center text-yellow">Spiffy</h1>

            {this.state.resultsDidLoad ? (
              <React.Fragment>
                <RepoResults
                  results={this.state.results}
                  query={this.state.query}
                  language={this.state.language}
                />
                <button
                  className="shadow bg-purple hover:bg-purple-light text-white font-bold py-2 px-1 rounded"
                  onClick={() => this.setState({ resultsDidLoad: false })}
                >
                  Search for different topic
                </button>
              </React.Fragment>
            ) : (
              <form
                className="w-full mt-8 border-green-light border-2"
                onSubmit={e => this.makeGithubRequest(e)}
              >
                <div className="md:flex mb-4">
                  <div className="md:w-1/5">
                    <label
                      className="block text-yellow font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="topic"
                    >
                      Topic
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-purple rounded w-full py-2 px-4 text-grey-darker"
                      type="text"
                      value={this.state.query}
                      placeholder="Enter topic..."
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/5">
                    <label className="block text-yellow font-bold md:text-right mb-1 md:mb-0 pr-4">
                      Language
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-purple rounded w-full py-2 px-4 text-grey-darker"
                      type="text"
                      value={this.state.language}
                      placeholder="Enter language..."
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center justify-center">
                  <div className="md:w-1/3" />
                  <div className="md:w-1/2">
                    <button
                      className="shadow bg-purple hover:bg-purple-light text-white font-bold py-2 px-1  rounded"
                      type="submit"
                    >
                      Search repos
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
          <div className="w-1/5 bg-grey-light" />
        </div>
      </div>
    );
  }
}

export default App;
