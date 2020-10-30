import React from "react";
import Select from "@bit/nexxtway.react-rainbow.select";
import champions from "../data/championInfo";
const containerStyles = {
  width: 250,
};

const options = champions.map((champion) => {
  return { value: champion.key, label: champion.id };
});

export default function ChampionSelector(props) {
  return (
    <Select
      options={[<option />, ...options]}
      id="select champion"
      style={containerStyles}
      onChange={(event) => props.onChange(event)}
    />
  );
}
