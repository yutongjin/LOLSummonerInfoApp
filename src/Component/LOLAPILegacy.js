import React from "react";
import axios from "axios";
import FineListBuilder from "./FineListBuilder";
class LOLAPILegacy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: "",
      counter: 1,
      name: "",
      playerInfo: [],
    };
  }
  componentDidMount() {
    /* fetch(" https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/RNG mIxgzzz?api_key=RGAPI-d01c34a9-b2ff-4818-9ae6-fb07996b3398", {mode: "no-cors"})
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);

                    this.setState({
                        isLoaded: true,
                        items: result.items
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )*/
    /*        axios.get('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/{this.state.name}?api_key=RGAPI-d01c34a9-b2ff-4818-9ae6-fb07996b3398&mode=no-cors').then(resp => {
            console.log(resp.data);
        });*/
  }
  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
      name: "",
    });
  };

  handleBtnClick = () => {
    if (this.state.inputValue.length > 0) {
      this.setState({
        inputValue: "",
        name: this.state.inputValue,
      });
    }
    axios
      .get(
        "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
          this.state.inputValue +
          "?api_key=" +
          this.api_key
      )
      .then((resp) => {
        console.log(resp.data);
        console.log(resp.data.id);

        this.setState({
          playerInfo: {
            id: resp.data.id,
            level: resp.data.summonerLevel,
            name: this.state.name,
          },
        });
      });
  };
  handleCheckMasterClick = () => {
    axios
      .get(
        "https://na1.api.riotgames.com//lol/champion-mastery/v4/champion-masteries/by-summoner/" +
          this.state.playerInfo.id +
          "?api_key=" +
          this.api_key
      )
      .then((resp) => {
        console.log("check master " + resp.data);
        console.log(resp.toString());
      });
  };
  handleGetActiveGameClick = () => {
    axios
      .get(
        "https://na1.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/" +
          this.state.playerInfo.id +
          "?api_key=" +
          this.api_key
      )
      .then((resp) => {
        console.log("check master " + resp.data);
        console.log(resp.toString());
      });
  };

  render() {
    return (
      <div style={{ width: "300px" }}>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)}
          onKeyUp={(e) => {
            if (e.keyCode === 13) this.handleBtnClick();
          }}
        />
        <button onClick={this.handleBtnClick.bind(this)}>提交2</button>
        <button onClick={this.handleCheckMasterClick.bind(this)}>
          查看英雄数据
        </button>
        <button onClick={this.handleGetActiveGameClick.bind(this)}>
          查看当前比赛信息
        </button>
        <FineListBuilder info={this.state.playerInfo} />
      </div>
    );
  }
}
export default LOLAPILegacy;
