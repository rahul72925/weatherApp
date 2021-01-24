import React from "react";
import classes from "./button.module.css";
const Button = (props) => {
  return (
    <div className={classes.ButtonContainer}>
      <button name={props.name} type={props.type} onClick={props.click}>
        {props.position}
      </button>
    </div>
  );
};
export default Button;
