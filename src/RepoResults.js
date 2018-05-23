import React from "react";
import ResultList from "./ResultList";
const RepoResults = props => {
  return (
    <div>
      <h5>We found the following matches</h5>
      <ResultList results={props.results} />
    </div>
  );
};

export default RepoResults;
