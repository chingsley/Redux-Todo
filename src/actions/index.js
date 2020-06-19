export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO_STATUS = "TOGGLE_TODO_STATUS";

export const addNewItem = (newItem) => {
  return {
    type: ADD_TODO,
    payload: newItem,
  };
};

export const toggleTodoStatus = (item, index) => {
  console.log(item, index);
  return {
    type: TOGGLE_TODO_STATUS,
    payload: { item, index },
  };
};
