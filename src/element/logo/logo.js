import React from "react";
import classes from "./logo.module.css";
const logo = (props) => {
  let ChangeAbleColor = [
    classes.Logo,
    props.colorScheme === "dark" ? classes.dark : "",
  ];
  return (
    <h1 className={ChangeAbleColor.join(" ")} onClick={props.cityClickHandler}>
      Weather app
    </h1>
  );
};
export default logo;
