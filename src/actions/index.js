export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO_STATUS = "TOGGLE_TODO_STATUS";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";

export const addNewItem = (newItem) => {
  return {
    type: ADD_TODO,
    payload: newItem,
  };
};

export const toggleTodoStatus = (item, index) => {
  return {
    type: TOGGLE_TODO_STATUS,
    payload: { item, index },
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: { id },
  };
};

export const editItem = (index, value) => {
  return {
    type: EDIT_ITEM,
    payload: { index, value },
  };
};
