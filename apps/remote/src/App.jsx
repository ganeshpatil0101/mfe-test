import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { Counter } from './Counter';

const App = () => {
  const onChangeCouter = (counter) => {
    console.log("called onChangeCouter", counter);
  }
  return (
      <div className="container">
        <div>Name: remote111</div>
        <Counter name={'Remote APP'} onChangeCouter={onChangeCouter} />
      </div>
    );
}
ReactDOM.render(<App />, document.getElementById("app"));
