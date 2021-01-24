import React from "react";
import assetMapping from "../assets/assetes.json";
import classes from "./inputBar.module.css";
const InputBar = (props) => {
  return (
    <div className={classes.inputBarField}>
      <label>Location</label>
      <br />
      <input
        type={props.type}
        placeholder={props.placeHolder}
        value={props.value}
        onChange={props.schangeHandler}
        style={
          props.error ? { borderBottomColor: assetMapping.colors.error } : null
        }
      />
    </div>
  );
};
export default InputBar;
