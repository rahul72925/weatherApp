import React from "react";
import classes from "./temperature.module.css";
const temerature = (props) => {
  return (
    <div className={classes.TemperatureWrapper}>
      {Math.round(props.degrees)}
      <span className={classes.TemperatureSymbol}>°</span>
    </div>
  );
};
export default temerature;
