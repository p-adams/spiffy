import React from "react";

const CardStyle = {
  border: "1px solid red"
};

const ResultCard = props => {
  return <div style={CardStyle}>{props.title}</div>;
};

export default ResultCard;
