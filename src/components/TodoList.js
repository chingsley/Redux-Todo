import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import { addNewItem, toggleTodoStatus } from "../actions";

class TodoList extends React.Component {
  state = { newItem: "", disableDelete: false, countEditingItems: 0 };

  handleInputChange = (e) => {
    this.setState({ newItem: e.target.value });
  };

  addNewItem = (e) => {
    e.preventDefault();
    if (this.state.newItem.trim()) {
      this.props.addNewItem(this.state.newItem);
      this.setState({ newItem: "" });
    }
  };

  toggleTodoStatus = (index) => (item) => {
    this.props.toggleTodoStatus(item, index);
  };

  disableAllDeleteBtns = () => {
    console.log("disableAllDeleteBtns()");
    this.setState((prevState) => ({
      disableDelete: true,
      countEditingItems: prevState.countEditingItems + 1,
    }));
  };
  enableAllDeleteBtns = () => {
    console.log("enableAllDeleteBtns()");
    this.setState((prevState) => {
      if (prevState.countEditingItems - 1 === 0) {
        return { disableDelete: false, countEditingItems: 0 };
      } else {
        return { countEditingItems: prevState.countEditingItems - 1 };
      }
    });
  };
  render() {
    console.log(this.state.disableDelete);
    return (
      <div>
        <h2>Todo Items</h2>
        <ul>
          {this.props.todos.map((item, index) => (
            <TodoItem
              key={index}
              itemIndex={index}
              item={item}
              toggleTodoStatus={this.toggleTodoStatus(index)}
              disableAllDeleteBtns={this.disableAllDeleteBtns}
              enableAllDeleteBtns={this.enableAllDeleteBtns}
              disableDelete={this.state.disableDelete}
            />
          ))}
        </ul>
        <form onSubmit={this.addNewItem}>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.newItem}
          />
          <button onClick={this.addNewItem}>Add Item</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { addNewItem, toggleTodoStatus })(
  TodoList
);
