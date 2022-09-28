import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Bigi", lastName: "Crab" },
      mood: "🤔",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName},
            {this.state.mood}
          </p>
          <button
            onClick={() => {
              this.setState({ name: { firstName: "Crab", lastName: "Bigi" } });
              console.log(this.state);
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
