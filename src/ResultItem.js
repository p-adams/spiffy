import React from "react";
import ResultCard from "./ResultCard";

const ResultItem = props => {
  return (
    <li>
      <ResultCard title={props.resultData.title} />
    </li>
  );
};

export default ResultItem;
