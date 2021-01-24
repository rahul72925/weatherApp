import React, { useState, useEffect } from "react";
import classes from "./icon.module.css";
const Icon = (props) => {
  let [iconn, setIconn] = useState("");

  // useEffect(async () => {
  //   let importedIcon = await import(`../assets/Icons/${props.type}.svg`);
  //   setIconn(importedIcon.default);
  // }, []);
  useEffect(() => {
    const fetchMyAPI = async () => {
      let importedIcon = await import(`../assets/Icons/${props.type}.svg`);
      setIconn(importedIcon.default);
    };
    fetchMyAPI();
  }, [props.type]);
  //why use [props.type] find out here
  //https://reactjs.org/docs/hooks-effect.html
  //
  //
  //
  return <img src={iconn} alt={props.type} className={classes.icon} />;
};
// react will not load svg file when we use src={require(`../assets/Icons/${props.type}.svg`)} I don't know why
// but I found the solution for it by using react hooks
//https://stackoverflow.com/questions/61339259/how-to-dynamically-import-svg-and-render-it-inline
export default Icon;
