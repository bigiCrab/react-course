import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = [
      {
        name: "monster1",
        id: "id_m1",
      },
      {
        name: "monster2",
        id: "id_m2",
      },
      {
        name: "monster3",
        id: "id_m3",
      },
    ];
  }
  render() {
    return (
      <div className="App">
        {this.state.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
