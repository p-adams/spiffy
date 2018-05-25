import React from "react";
import ResultList from "./ResultList";
const spanStyle = {
  fontWeight: "bold"
};
const RepoResults = props => {
  return (
    <div>
      <p>
        We found{" "}
        {props.results.length === 1
          ? props.results.length + " repo"
          : props.results.length + " repos"}{" "}
        for <span style={spanStyle}>{props.query}</span>, language{" "}
        <span style={spanStyle}>{props.language}</span>
      </p>
      <ResultList results={props.results} />
    </div>
  );
};

export default RepoResults;
