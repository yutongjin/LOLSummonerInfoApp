import React from "react";
import ListBuilder from "@bit/lekanmedia.shared-ui.list-builder";
import GetChampionMastery from "./GetChampionMastery";
const style = {
  margin: "0px",
  display: "flex",
  justifyContent: "left",
  alignItems: "left",
  width: 1000,
};

export default function FineListBuilder(props) {
  console.log(props);
  if (props.info.length > 1) {
    console.log("inside builder" + JSON.stringify(props));
    return (
      <div style={style}>
        <ListBuilder
          headers={["name", "level"]}
          rows={props.info.map((player) => {
            let id = player.id;
            let level = player.level;
            let name = player.name;
            return [
              name === undefined ? " 11" : name,
              level === undefined ? " 11" : level,
            ];
          })}
          onClick={(rowData) => GetChampionMastery(rowData, props.api_key)}
          defaultSelectedRow={2}
        />
      </div>
    );
  }
  return <div></div>;
}
