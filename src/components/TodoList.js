import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import { addNewItem, toggleTodoStatus } from "../actions";

class TodoList extends React.Component {
  state = { newItem: "" };

  handleInputChange = (e) => {
    this.setState({ newItem: e.target.value });
  };

  addNewItem = () => {
    if (this.state.newItem.trim()) {
      this.setState({ newItem: "" });
      this.props.addNewItem(this.state.newItem);
    }
  };

  toggleTodoStatus = (index) => (item) => {
    this.props.toggleTodoStatus(item, index);
  };
  render() {
    return (
      <div>
        <h2> To Items</h2>
        <ul>
          {this.props.todos.map((item, index) => (
            <TodoItem
              key={index}
              itemIndex={index}
              item={item}
              toggleTodoStatus={this.toggleTodoStatus(index)}
            />
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newItem}
        />
        <button onClick={this.addNewItem}>Add Item</button>
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
