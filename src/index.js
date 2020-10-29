import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      {/* <Route path="about" component={About}/>
            <Route path="users" component={Users}>
                <Route path="/user/:userId" component={User}/>
            </Route>*/}
      {/*<Route path="*" component={NoMatch}/>*/}
    </Route>
  </Router>,
  document.getElementById("root")
);
/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
