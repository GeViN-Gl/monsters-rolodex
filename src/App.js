import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { Searchbox } from "./components/search-box/search-box.component";

// import logo from "./logo.svg";
import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const getMonsters = async (url) => {
      try {
        const responce = await fetch(url);
        if (!responce.ok) return new Error(`fetch fail `, responce.status);
        const data = await responce.json();

        this.setState({ monsters: data });
      } catch (err) {
        console.error(`Fecth fail: `, err);
      }
    };

    getMonsters("https://jsonplaceholder.typicode.com/users");

    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((responce) => responce.json())
    //   .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="header">Monster Rolodex</h1>
        <Searchbox placeholder="search monsters" handleChange={this.handleChange} />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
