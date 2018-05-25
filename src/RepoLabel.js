import React from "react";
import PropTypes from "prop-types";

const RepoLabel = label => {
  const labelStyle = {
    backgroundColor: "#" + label.backgroundColor,
    padding: "5px",
    color: "white",
    fontWeight: "bolder",
    borderRadius: "5px"
  };
  return <span style={labelStyle}>{label.name}</span>;
};

RepoLabel.propTypes = {
  name: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default RepoLabel;
