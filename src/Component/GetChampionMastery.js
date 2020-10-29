import React, { useState } from "react";
import ListBuilder from "@bit/lekanmedia.shared-ui.list-builder";
import axios from "axios";
import Champion from "./Champion";
import GetChampionGameNumberAndWinRate from "./GetChampionGameNumberAndWinRate";
const style = {
  margin: "0px",
  display: "flex",
  justifyContent: "left",
  alignItems: "left",
  width: 1000,
};

export default function GetChampionMastery({ name }, api_key) {
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
        let id = resp.data.id;
        axios
          .get(
            "https://" +
              area +
              ".api.riotgames.com//lol/champion-mastery/v4/champion-masteries/by-summoner/" +
              id +
              "?api_key=" +
              api_key
          )
          .then((resp) => {
            if (resp !== undefined) {
              console.log("suc");
              //let info = GetChampionGameNumberAndWinRate(name, )
              resolve(resp);
            } else {
              console.log("fail");

              reject("Error");
            }
            resp.data.map((champion) => {
              /*console.log(
                Champion(champion.championId) + " " + champion.championPoints
              );*/
            });
            //addActivePlayers(resp.data);
          });
      })
  );
}
