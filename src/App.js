import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import HomePage from "./Pages/homepage/homepage.component";

const Hats = () => <div>Hats</div>;

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop/hats' component={Hats} />
    </div>
  );
}

export default App;
