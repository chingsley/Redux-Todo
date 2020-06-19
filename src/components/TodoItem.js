import React from "react";
// import { connect } from "react-redux";
// import { toggleTodoStatus } from "../actions";

export default (props) => {
  const toggleThisItemStatus = () => {
    props.toggleTodoStatus(props.item);
  };
  console.log(props.item.completed);
  return (
    <li>
      <h4
        onClick={toggleThisItemStatus}
        className={
          props.item.completed ? "item completed" : "item not-completed"
        }
      >
        {props.item.value}
      </h4>
    </li>
  );
};

// export default connect(undefined, { toggleTodoStatus })(todoItem);
