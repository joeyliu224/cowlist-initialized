import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
    <div>
      <h1>Cowlist</h1>
    </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);