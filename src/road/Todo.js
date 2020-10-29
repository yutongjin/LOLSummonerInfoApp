/*
import React, { useState, useEffect } from "react";
import List from "@bit/eden.basic-todo-app.list/dist/List";
import "./todoFont.css";

function Todo() {
  let handleDeleteAllClick = () => {
    setList([]);
    setInputValue("");
    setCounter(1);
  };
  useEffect(() => {
    document.title = `You totally created ${counter - 1}  todo`;
  });
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [counter, setCounter] = useState(1);

  let handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  let handleBtnClick = () => {
    if ( inputValue .length > 0) {
      list.push(
        { text: inputValue, key: counter.toString() });

      setInputValue("");
      setCounter(counter + 1);
    }
  };

  let handleItemDelete = (props) => {
    let index = -1;
    list.forEach((v, i) => {
      if (v.key === props) {
        index = i;
      }
    });
    list.splice(index, 1);
    //https://stackoverflow.com/questions/56266575/why-is-usestate-not-triggering-re-render
    setList([...list]);
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
      <button onClick={handleBtnClick}>提交</button>
      <button onClick={handleDeleteAllClick}>删除全部</button>

      <List items={list} removeItem={handleItemDelete} />
    </div>
  );
}

export default Todo;
*/
