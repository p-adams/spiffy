import React from "react";
import ResultCard from "./ResultCard";

const ResultItem = props => {
  return (
    <li>
      <ResultCard
        user={props.repoData.user}
        title={props.repoData.title}
        htmlUrl={props.repoData.html_url}
        labels={props.repoData.labels}
        issueState={props.repoData.state}
        createdAt={props.repoData.created_at}
        updatedAt={props.repoData.updated_at}
      />
    </li>
  );
};

export default ResultItem;
