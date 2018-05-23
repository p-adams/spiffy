import React from "react";
import ResultItem from "./ResultItem";

const ResultList = props => (
  <ul>
    {props.results.map(result => (
      <ResultItem key={result.id} resultData={result} />
    ))}
  </ul>
);

export default ResultList;
