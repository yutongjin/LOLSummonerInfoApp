import * as React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import { useState, useEffect } from "react";
import GetChampionMastery from "../Component/GetChampionMastery";
function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});
export default function Deposits({ scores }) {
  const classes = useStyles();
  console.log("scores" + scores);
  /* useEffect(() => {
    console.log();
    //let score = GetChampionMastery('RNG mIxgzzz', api_key);
    // setScores(score);
  }, [scores]);*/
  /*  let scoresPromise =
  scoresPromise.then(scores => console.log(scores));/!*new Promise(function(resolve, reject) {
     let scores = GetChampionMastery('RNG mIxgzzz', api_key);
     if(scores !== undefined) {
         console.log(JSON.stringify(scores));
         resolve('success');
     } else {
         reject('error');
     }
     return scores;
  });*!/
  scoresPromise.then(scores => {
      console.log(JSON.stringify(scores));

  });*/
  return (
    <React.Fragment>
      <Title>Total Scores!</Title>
      <Typography component="p" variant="h4">
        {scores}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
