import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    console.log("constructor call");
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    console.log("componentDidMount call");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          {
            monsters: users,
          },
          () => {
            console.log(this.state.monsters);
          }
        )
      );
  }

  render() {
    console.log("render call");
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            console.log(event.target.value);
            this.setState({
              monsters: this.state.monsters.filter((monster) =>
                monster.name.includes(event.target.value)
              ),
            });
          }}
        />
        {this.state.monsters.map((monster) => {
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
