import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import "./assets/css/style.css"
import Header from "./Component/Header";
import Home from "./Component/Home";

const App = () => {
  // @ts-ignore
  return (
    <div className="window-color">
      <Router>
        <Header/>
        <Route exact path="/" component={Home}/>
      </Router>
    </div>
  );
}

export default App;
