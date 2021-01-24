import React from "react";
import classes from "./searchBar.module.css";
import InputBar from "../../element/inputbar/inputbar";
import Button from "../../element/button/button";

const SearchBar = (props) => {
  return (
    <div className={classes.SearchBarContainer}>
      <InputBar
        type="text"
        placeHolder="Enter a city"
        value={props.value}
        schangeHandler={props.aschangeHandler}
        error={props.error}
      />
      <Button type="button" click={props.btnclickhandle} position="Find" />
    </div>
  );
};
export default SearchBar;
