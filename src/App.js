import React, { Component } from "react";
import "./App.css";
import TodoInput from "./Components/TodoInput";
import TodoOutput from "./Components/TodoOutput";
import uuid from "uuid";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleClickChange = e => {
    this.setState({ item: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updatedItems = [...this.state.items, newItem];

    this.setState({ items: updatedItems, item: "", id: uuid() });
  };

  clearList = () => {
    this.setState({ items: [] });
  };

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: filteredItems });
  };

  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const chosenItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItems,
      id: id,
      item: chosenItem.title,
      editItem: true
    });
  };

  render() {
    return (
      <div className="App">
        {" "}
        <div className="container">
          {" "}
          <TodoInput
            item={this.state.item}
            handleChange={this.handleClickChange}
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}
          />
          <TodoOutput
            items={this.state.items}
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
          />
        </div>{" "}
      </div>
    );
  }
}

export default App;
