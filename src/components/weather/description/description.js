import React from "react";
import classes from "./description.module.css";
const description = (props) => {
  return <div className={classes.DescriptionWrapper}>{props.type}</div>;
};
export default description;
