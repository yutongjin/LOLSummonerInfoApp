import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import React from "react";
import TodoList from "./Component/TodoList";
import LOLAPI from "./Component/LOLAPI";
import Dashboard from "./dashboard/Dashboard";
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todo">todo</Link>
            </li>
            <li>
              <Link to="/lol">lol</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/*  <Route path="/todo">
            <TodoList />
          </Route>*/}
          <Route path="/lol">
            <LOLAPI />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  return <h2>Home333</h2>;
}
