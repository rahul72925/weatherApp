import React from "react";
import classes from "./weather.module.css";
import Icon from "../../element/icons/icon.js";
import Date from "./date/date.js";
import Description from "./description/description.js";
import Temperature from "./temprature/temprature.js";

const weatherDetail = (props) => {
  return (
    <div className={classes.WeatherDetailsWrapper}>
      <div className={classes.WeatherIconWrapper}>
        <Icon type={props.data.description} />
      </div>
      <div className={classes.WeatherDataWrapper}>
        <Temperature degrees={props.data.temperature} />
        <Description type={props.data.description} />
        <Date />
      </div>
    </div>
  );
};
export default weatherDetail;
