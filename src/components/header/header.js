import React from "react";
import assetMapping from "../../element/assets/assetes.json";
import classes from "./header.module.css";
import Logo from "../../element/logo/logo.js";
const header = (props) => {
  return (
    <header
      className={classes.Header}
      style={props.error ? { background: assetMapping.colors.error } : null}
    >
      <Logo cityClickHandler={props.newCityHandler} />
    </header>
  );
};
export default header;
