import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { Counter } from 'counter/Counter';

const App = () => {
  const onChangeCouter = (counter) => {
    console.log("called onChangeCouter", counter);
  }
  return (
    <div className="container">
      <h2 className="host-title" >Name: host</h2>
      <Counter name={'Host APP'} onChangeCouter={onChangeCouter} />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
