import React from "react";
import { parseRepoName } from "./utils/parseRepoName";
import RepoLabel from "./RepoLabel";

const ResultCard = props => {
  const user = props.user;
  const repoLabels = props.labels.map((label, index) => {
    return (
      <div className="inline-block px-1 py-1" key={index}>
        <RepoLabel name={label.name} backgroundColor={label.color} />
      </div>
    );
  });
  return (
    <div className="max-w-md w-full lg:flex rounded overflow-hidden shadow-lg px-2 py-2 mt-4 bg-grey-dark">
      <div>
        <div className="lg:h-auto lg:w-12 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
          <img src={user.avatar_url} title="GitHub avatar" />
        </div>
        <div className="text-sm">
          <a href={user.html_url}>{user.login}</a>
        </div>
      </div>
      <div className=" ml-4 border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-2 flex flex-col justify-between leading-normal">
        <h6>
          {parseRepoName(props.repoUrl)} /{" "}
          <a href={props.htmlUrl}>{props.title}</a>
        </h6>
        <div className="px-2 py-2 bg-grey">
          {props.body ? (
            props.body
          ) : (
            <span className="text-red-darker">Issue has no body</span>
          )}
        </div>
        <h6>Issue is:</h6> {props.issueState}
        <h6>Issue created:</h6> {props.createdAt}
        <h6>Issue updated:</h6> {props.updatedAt}
        <div className="px-6 py-4">{repoLabels}</div>
      </div>
    </div>
  );
};

export default ResultCard;
