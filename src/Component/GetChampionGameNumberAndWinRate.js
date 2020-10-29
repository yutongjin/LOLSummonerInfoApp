import React, { useState } from "react";
import ListBuilder from "@bit/lekanmedia.shared-ui.list-builder";
import axios from "axios";
import Champion from "./Champion";
const style = {
  margin: "0px",
  display: "flex",
  justifyContent: "left",
  alignItems: "left",
  width: 1000,
};

export default function GetChampionGameNumberAndWinRate(
  { name, championId },
  api_key
) {
  console.log(name);
  let area = "na1";

  return new Promise((resolve, reject) =>
    axios
      .get(
        "https://" +
          area +
          ".api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
          name +
          "?api_key=" +
          api_key
      )
      .then((resp) => {
        let id = resp.data.accountId;
        axios
          .get(
            "https://" +
              area +
              ".api.riotgames.com/lol/match/v4/matchlists/by-account/" +
              id +
              "?api_key=" +
              api_key +
              "" +
              "&champion=" +
              championId
          )
          .then((resp) => {
            if (resp !== undefined) {
              console.log("suc");

              resolve(resp);
            } else {
              console.log("fail");

              reject("Error");
            }
            //addActivePlayers(resp.data);
          });
      })
  );
}
