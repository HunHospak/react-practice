import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Nav from "./Components/Nav";
import Extra from "./Components/Extra";
import About from "./Components/About";
import { LoginPage } from "./Components/Login/LoginPage";
import { ProtectedRoute } from "./Components/Auth/protected.route";
import auth from "./Components/Auth/auth";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="Router">
          <Nav />
          <Switch>
            <Route path="/" exact component={LoginPage} />
            <ProtectedRoute path="/home" exact component={Home} />
            <ProtectedRoute path="/about" exact component={About} />
            <ProtectedRoute path="/extra" exact component={Extra} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const Home = (props) => {
  return (
    <div>
      <h1>Home Page</h1>
      <button
        onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default App;
