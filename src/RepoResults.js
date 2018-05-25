import React from "react";
import ResultList from "./ResultList";
import RepoLabel from "./RepoLabel";
const spanStyle = {
  fontWeight: "bold"
};
const RepoResults = props => {
  return (
    <div>
      <div>
        We found{" "}
        {props.results.length === 1
          ? props.results.length + " repo"
          : props.results.length + " repos"}{" "}
        with <RepoLabel text={"good-first-issue"} backgroundColor={"#8f00ff"} />{" "}
        label for query: <span style={spanStyle}>{props.query}</span>, language:{" "}
        <span style={spanStyle}>{props.language}</span>
      </div>
      <ResultList results={props.results} />
    </div>
  );
};

export default RepoResults;
