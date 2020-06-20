export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO_STATUS = "TOGGLE_TODO_STATUS";
export const REMOVE_ITEM = "REMOVE_ITEM";

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

export const removeItem = (id) => {
  console.log("called .....");
  return {
    type: REMOVE_ITEM,
    payload: { id },
  };
};
