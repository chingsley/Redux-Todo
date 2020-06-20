import React from "react";
import { connect } from "react-redux";
import { removeItem } from "../actions";

export const todoItem = (props) => {
  const toggleThisItemStatus = () => {
    props.toggleTodoStatus(props.item);
  };

  const removeThisItem = () => {
    props.removeItem(props.item.id);
  };
  return (
    <li className="listItem">
      <h4
        onClick={toggleThisItemStatus}
        className={
          props.item.completed ? "item completed" : "item not-completed"
        }
      >
        {props.item.value}
      </h4>
      <button className="btn-remove" onClick={removeThisItem}>
        remove
      </button>
    </li>
  );
};

export default connect(undefined, { removeItem })(todoItem);
