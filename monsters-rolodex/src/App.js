import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = [
      {
        name: "monster1",
      },
      {
        name: "monster2",
      },
      {
        name: "monster3",
      },
    ];
  }
  render() {
    return (
      <div className="App">
        {this.state.map((monster) => {
          return <div>{monster.name}</div>;
        })}
      </div>
    );
  }
}

export default App;
