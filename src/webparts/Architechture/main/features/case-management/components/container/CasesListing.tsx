import * as React from "react";
import ListingView from "../presentation/ListingView";
import classes from "../../stylesheets/casesListing.module.scss";

export default function CasesListing() {
  return (
    <div className={classes.container}>
      <ListingView />
    </div>
  );
}
