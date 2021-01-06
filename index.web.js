import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

Object.assign(document.body.style, {
  bottom: 0,
  display: "flex",
  left: 0,
  margin: 0,
  position: "absolute",
  right: 0,
  top: 0,
});

const root = document.createElement('div');
root.style.flex = 1;
document.body.append(root);

ReactDOM.render(<App />, root);
