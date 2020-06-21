import {
  ADD_TODO,
  TOGGLE_TODO_STATUS,
  REMOVE_ITEM,
  EDIT_ITEM,
} from "../actions";

export const stateID = "redux_to_state";

const initialState = {
  todos: [
    {
      id: 1,
      value: "Walk the dog.",
      completed: false,
    },
  ],
};
const getInitialState = () => {
  if (localStorage.getItem(stateID)) {
    const currentState = JSON.parse(localStorage.getItem(stateID));
    console.log(currentState);
    return currentState;
  } else {
    localStorage.setItem(stateID, JSON.stringify(initialState));
    return initialState;
  }
};

const generateId = (arrOfObjects) => {
  const arrOfIds = arrOfObjects.map((obj) => obj.id);
  const sortedIds = arrOfIds.sort();
  const highestId = sortedIds[sortedIds.length - 1] || 0;
  return highestId + 1;
};

export const reducer = (state = getInitialState(), action) => {
  let newState;
  switch (action.type) {
    case ADD_TODO:
      newState = {
        ...state,
        todos: [
          ...state.todos,
          {
            id: generateId(state.todos),
            completed: false,
            value: action.payload,
          },
        ],
      };
      localStorage.setItem(stateID, JSON.stringify(newState));
      return newState;

    case TOGGLE_TODO_STATUS:
      const todos = [...state.todos];
      todos[action.payload.index].completed = !todos[action.payload.index]
        .completed;
      newState = {
        ...state,
        todos,
      };
      localStorage.setItem(stateID, JSON.stringify(newState));
      return newState;

    case REMOVE_ITEM:
      newState = {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
      localStorage.setItem(stateID, JSON.stringify(newState));
      return newState;

    case EDIT_ITEM:
      const newTodoList = [...state.todos];
      newTodoList[action.payload.index].value = action.payload.value;
      newState = {
        ...state,
        todos: newTodoList,
      };
      localStorage.setItem(stateID, JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};
