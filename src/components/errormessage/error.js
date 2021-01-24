import React from "react";
import classes from "./error.module.css";
import Button from "../../element/button/button";

const Error = (props) => {
  return (
    <div className={classes.ErrorNoticeWrapper}>
      <h1 className={classes.NotFound404}>404</h1>
      <div className={classes.ErrorTextWrapper}>
        <h2 className={classes.NotFoundHeading}>Oops!</h2>
        <p className={classes.NotFoundDetails}>
          We can't find the city you are looking for.
        </p>
        <Button
          name="tryAgain"
          type="button"
          click={props.newCityHandler}
          position="Try again"
        >
          Try again
        </Button>
      </div>
    </div>
  );
};
export default Error;
