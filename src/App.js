import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    };
  }

  updateInput(key, value) {
    this.setState({
      [key]: value
    });
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form">
            <div className="form-container">
              <input
                type="text"
                placeholder="Add an Item"
                value={this.state.newItem}
                onChange={e => this.updateInput("newItem", e.target.value)} />
              <button
                className="submit-button"
                type="submit"
                onClick={() => this.addItem()}
                disabled={!this.state.newItem.length}>+</button>
            </div>
            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    <button className="delete-button" onClick={() => this.deleteItem(item.id)}>x</button>
                    {item.value}
                  </li>
                )
              })}
            </ul>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
