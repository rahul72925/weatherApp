import React from "react";
import classes from "./footer.module.css";
import assetMapping from "../../element/assets/assetes.json";
import Logo from "../../element/logo/logo";
const Footer = (props) => {
  return (
    <footer className={classes.Footer}>
      <Logo cityClickHandler={props.newCityHandler} colorScheme="dark" />
      <div
        className={classes.Separator}
        style={
          props.error ? { backgroundColor: assetMapping.colors.error } : null
        }
      ></div>
    </footer>
  );
};
export default Footer;
