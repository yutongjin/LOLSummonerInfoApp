import React, { useState, useEffect } from "react";
import axios from "axios";
import FineListBuilder from "./FineListBuilder";
export default function LOLAPI() {
  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [playerInfo, setPlayerInfo] = useState([]);
  const [activePlayers, setActivePlayers] = useState([]);
  const api_key = "RGAPI-1f92482a-aec2-46d3-a7d6-680603097598";
  let area = "na1";
  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);
  /*componentDidMount() {
    /!* fetch(" https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/RNG mIxgzzz?api_key=RGAPI-d01c34a9-b2ff-4818-9ae6-fb07996b3398", {mode: "no-cors"})
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
            )*!/
    /!*        axios.get('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/{this.state.name}?api_key=RGAPI-d01c34a9-b2ff-4818-9ae6-fb07996b3398&mode=no-cors').then(resp => {
            console.log(resp.data);
        });*!/
  }*/
  let handleInputChange = (e) => {
    setInputValue(e.target.value);
    setName("");
  };

  let handleBtnClick = () => {
    if (inputValue.length > 0) {
      setName(inputValue);
      //setInputValue("");
    }
    axios
      .get(
        "https://" +
          area +
          ".api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
          inputValue +
          "?api_key=" +
          api_key
      )
      .then((resp) => {
        console.log(resp.data);
        console.log(resp.data.id);

        setPlayerInfo({
          id: resp.data.id,
          level: resp.data.summonerLevel,
          name: name,
        });
      });
  };

  let handleGetActiveGameClick = () => {
    axios
      .get(
        "https://" +
          area +
          ".api.riotgames.com/lol/spectator/v4/active-games/by-summoner/" +
          playerInfo.id +
          "?api_key=" +
          api_key
      )
      .then((resp) => {
        let playList = addActivePlayers(resp.data);
        setActivePlayers([...playList]);
        console.log("list " + JSON.stringify([...playList]));
        console.log("active info is " + JSON.stringify(activePlayers));
      });
    //addActivePlayers(resp.data);
  };

  let addActivePlayers = (gameData) => {
    let playerList = [];
    gameData.participants.map((player) => {
      playerList.push({
        id: player.summonerId,
        level: 1,
        name: player.summonerName,
      });
    });
    return playerList;
    setActivePlayers({
      id: 1,
      level: 2,
      name: name,
    });

    console.log("list " + JSON.stringify([...playerList]));

    console.log("list " + JSON.stringify(playerList));
    /*setActivePlayers([...playerList],{});
    setPlayerInfo(playerList);*/
    console.log("active info is " + JSON.stringify(activePlayers));
  };
  return (
    <div style={{ width: "300px" }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyUp={(e) => {
          if (e.keyCode === 13) handleBtnClick();
        }}
      />
      <button onClick={handleBtnClick}>提交2</button>
      {/*
      //<button onClick={handleCheckMasterClick}>查看英雄数据</button>
*/}
      <button onClick={handleGetActiveGameClick}>查看当前比赛信息</button>
      <FineListBuilder api_key={api_key} info={activePlayers} />
    </div>
  );
}
