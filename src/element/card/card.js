import React from "react";
import classes from "./card.module.css";
const Card = (props) => {
  return <div className={classes.cardContainer}>{props.children}</div>;
};
export default Card;
