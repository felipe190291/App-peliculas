import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import Home from "./components/Home/Home.js";
import Detail from "./components/Detail/Detail";
import { Route } from "react-router-dom";
import Favoritos from "../src/components/Favoritos/Favoritos";
import production from "./imgs/production ID_4010131.mp4";

function App() {
  return (
    <div className="App App-header">
      <div>
        <video
          id="video"
          preload="auto"
          loop="loop"
          muted
          autoplay="autoplay"
          src={production}
        ></video>
      </div>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/favs" component={Favoritos} />
        <Route
          path="/movie/:id"
          render={({ match }) => <Detail match={match} />}
        />
      </div>
    </div>
  );
}

export default App;
