import "./App.css";
import "./components/card-list/card-list.component";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      {/* <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monster"
        className="monster-search-box"
      ></SearchBox>
      <CardList monsters={filteredMonsters}></CardList> */}
    </div>
  );
};

/* class App extends Component {
  constructor() {
    // console.log("constructor call");
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    // console.log("componentDidMount call");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          {
            monsters: users,
          },
          () => {
            // console.log(this.state.monsters);
          }
        )
      );
  }

  onSearchChange = (event) => {
    // console.log("search onChange:", event.target.value);
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    // console.log("render call");

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monster"
          className="monster-search-box"
        ></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
} */

export default App;
