import React, { useState } from "react";
import data from "../data/championInfo.json";
export function Champion(id) {
  let champ = "";
  data.map((champion) => {
    if (Number(champion.key) === Number(id)) {
      champ = champion;
    }
  });
  return champ;
}
export default Champion;
