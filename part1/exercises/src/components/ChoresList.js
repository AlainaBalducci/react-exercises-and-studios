import React from 'react';
import classes from "./ChoresList.module.css";

export default function ChoresList() {
  let choresList = ["Dishes", "Laundry", "Take out trash", "Sweep"];
  return (
    <div className={classes.border1}>
      <h3 className={classes.choresHeading}>Chores for Today :( </h3>
      <ol>
        <li className={classes.choresText}>{choresList[0]}</li>
        <li className={classes.choresText}>{choresList[1]}</li>
        <li className={classes.choresText}>{choresList[2]}</li>
        <li className={classes.choresText}>{choresList[3]}</li>
      </ol>
    </div>
  );
}
