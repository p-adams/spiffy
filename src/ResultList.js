import React from "react";
import ResultItem from "./ResultItem";

const ResultList = props => (
  <ul className="h-64 overflow-auto border-purple border-2">
    {props.results.map(result => (
      <ResultItem key={result.id} repoData={result} />
    ))}
  </ul>
);

export default ResultList;
