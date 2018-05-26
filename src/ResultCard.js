import React from "react";
import { parseRepoName } from "./utils/parseRepoName";
import RepoLabel from "./RepoLabel";

const CardStyle = {
  border: "1px solid red"
};

const UserInfoContainer = {
  border: "1px solid green"
};

const UserAvatarImage = {
  width: "100px",
  height: "100px",
  objectFit: "scale-down"
};

const UserMetadataContainer = {
  border: "1px solid purple"
};

const ResultCard = props => {
  const user = props.user;

  const repoLabels = props.labels.map((label, index) => {
    return (
      <li key={index}>
        <RepoLabel name={label.name} backgroundColor={label.color} />
      </li>
    );
  });
  return (
    <div style={CardStyle}>
      <h3>
        <a href={props.htmlUrl}>{props.title}</a>
      </h3>
      <div style={UserInfoContainer}>
        <a href={user.html_url}>{user.login}</a>
        <img style={UserAvatarImage} src={user.avatar_url} alt="meow" />
      </div>
      <div>Repo name: {parseRepoName(props.repoUrl)}</div>
      <div>Body: {props.body}</div>
      <div style={UserMetadataContainer}>
        <ul>{repoLabels}</ul>
        <p>Issue is: {props.issueState}</p>
        <p>Issue created: {props.createdAt}</p>
        <p>Issue updated: {props.updatedAt}</p>
      </div>
    </div>
  );
};

export default ResultCard;
