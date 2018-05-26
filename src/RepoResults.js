import React from "react";
import ResultList from "./ResultList";
import RepoLabel from "./RepoLabel";

const RepoResults = props => {
  return (
    <div className="mt-8">
      <div className="px-4 py-2 mb-4">
        We found{" "}
        {props.results.length === 1
          ? props.results.length + " repo"
          : props.results.length + " repos"}{" "}
        with <RepoLabel name={"good-first-issue"} backgroundColor={"D3D3D3"} />{" "}
        label for topic: <span className="font-bold">{props.topic}</span>,
        language: <span className="font-bold">{props.language}</span>.
      </div>
      <ResultList results={props.results} />
    </div>
  );
};

export default RepoResults;
