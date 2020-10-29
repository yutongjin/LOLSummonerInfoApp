import React from "react";
import Champion from "./Champion";
class ChampionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      champion: "LeeSIn",
      counter: 1,
    };
  }
  render() {
    // <3>
    return <Champion name={this.state.champion} />;
  }
}
export default ChampionList;
