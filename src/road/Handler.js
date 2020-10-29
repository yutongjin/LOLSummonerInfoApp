import React from "react";
const Handler = () => {
  const champions = [
    {
      name: "lee",
      id: 1,
      type: "close",
    },
    {
      name: "Ashe",
      id: 2,
      type: "distant",
    },
  ];

  const handleChange = (event) => {
    console.log(event.target.value);
  };
  const ChampionList = (props) =>
    props.list.map((champion) => (
      <div key={champion.id}>
        <span>{champion.name}</span>
        <span>{champion.type}</span>
      </div>
    ));
  return (
    <div>
      <h1>Hi Cooper</h1>
      <label htmlFor="search">Search : </label>
      <input id="search" type="text" onChange={handleChange} />
      <ChampionList list={champions} />
    </div>
  );
};

export default Handler;
