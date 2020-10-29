import React, { useState, useEffect } from "react";
import "../App.css";
import FirstBin from "../road/FirstBin";
import Todo from "../road/Todo";
import PlusItemButton from "../road/PlusItem";

function TodoList() {
  return (
    <div>
      <FirstBin />
      <PlusItemButton />
      <Todo />
    </div>
  );
}

export default TodoList;
