// Action value
const ADD_TODO = 'todos/ADD_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';
const UPDATE_TODO = 'todos/UPDATE_TODO';

// Action Creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

const initialState = {
  todos: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        todos: [...state.todos.filter((e) => e.id !== action.payload)],
      };
    case UPDATE_TODO:
      return {
        todos: [
          ...state.todos.filter((e) => {
            if (e.id === action.payload) {
              e.isDone = !e.isDone;
            }
            return e;
          }),
        ],
      };
    default:
      return state;
  }
};

export default todos;
