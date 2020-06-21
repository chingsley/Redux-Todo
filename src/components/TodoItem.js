import React from "react";
import { connect } from "react-redux";
import { removeItem, editItem } from "../actions";

class TodoItem extends React.Component {
  state = {
    editMode: false,
    input: "",
  };

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  toggleThisItemStatus = () => {
    if (!this.state.editMode) {
      this.props.toggleTodoStatus(this.props.item);
    }
  };

  removeThisItem = () => {
    this.props.removeItem(this.props.item.id);
  };
  enterEditMode = () => {
    this.setState({ editMode: true, input: this.props.item.value });
    this.nameInput.focus();
    this.props.disableAllDeleteBtns();
  };
  editThisItem = (e) => {
    e.preventDefault();
    if (this.state.input.trim()) {
      this.props.editItem(this.props.itemIndex, this.state.input);
      this.setState({ editMode: false });
      this.props.enableAllDeleteBtns();
    }
  };

  render() {
    return (
      <li className="listItem">
        <form onSubmit={this.editThisItem}>
          <input
            value={
              this.state.editMode ? this.state.input : this.props.item.value
            }
            onChange={this.handleInputChange}
            readOnly={this.state.editMode ? false : true}
            onClick={this.toggleThisItemStatus}
            className={
              this.props.item.completed
                ? "item completed"
                : "item not-completed"
            }
            id={this.state.editMode ? "editMode" : "viewMode"}
            ref={(input) => {
              this.nameInput = input;
            }}
          />
        </form>

        <button
          className="btn-edit"
          onClick={this.state.editMode ? this.editThisItem : this.enterEditMode}
        >
          {this.state.editMode ? "save changes" : "edit"}
        </button>
        <button
          className="btn-remove"
          onClick={this.removeThisItem}
          disabled={this.props.disableDelete ? true : false}
        >
          remove
        </button>
      </li>
    );
  }
}

export default connect(undefined, { removeItem, editItem })(TodoItem);
