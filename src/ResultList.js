import React from "react";
import ResultItem from "./ResultItem";

const ResultList = props => (
  <ul className="h-64 px-2 py-2 overflow-auto bg-grey">
    {props.results.map(result => (
      <ResultItem key={result.id} repoData={result} />
    ))}
  </ul>
);

export default ResultList;
