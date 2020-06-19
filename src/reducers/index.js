import { ADD_TODO, TOGGLE_TODO_STATUS } from "../actions";

const initialState = {
  todos: [
    {
      id: 1,
      value: "Walk the dog.",
      completed: false,
    },
  ],
};

const generateId = (arrOfObjects) => {
  const arrOfIds = arrOfObjects.map((obj) => obj.id);
  const sortedIds = arrOfIds.sort();
  const highestId = sortedIds[sortedIds.length - 1];
  return highestId + 1;
};

export const reducer = (state = initialState, action) => {
  // console.log("status");
  // console.log(generateId(state.todos), action.type);
  switch (action.type) {
    case ADD_TODO:
      return {
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

    case TOGGLE_TODO_STATUS:
      // console.log("here......");
      const todos = [...state.todos];
      todos[action.payload.index].completed = !todos[action.payload.index]
        .completed;
      return {
        ...state,
        todos,
      };
    default:
      return state;
  }
};
