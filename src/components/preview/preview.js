import React from "react";
import classes from "./preview.module.css";
import PreviewImg from "../../element/assets/Icons/Preview.svg";
const Preview = (props) => {
  return <img src={PreviewImg} className={classes.Preview} alt="preview" />;
};
export default Preview;
