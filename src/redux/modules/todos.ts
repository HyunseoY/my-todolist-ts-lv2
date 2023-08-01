import { Todo } from 'model/interface';

// Action value
const ADD_TODO = 'todos/ADD_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';
const UPDATE_TODO = 'todos/UPDATE_TODO';

// Action interface
interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: number;
}

interface UpdateTodoAction {
  type: typeof UPDATE_TODO;
  payload: number;
}

type TodoActionTypes = AddTodoAction | DeleteTodoAction | UpdateTodoAction;

// Action Creator
export const addTodo = (payload: Todo): AddTodoAction => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload: number): DeleteTodoAction => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const updateTodo = (payload: number): UpdateTodoAction => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

// Initial State
interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

// Reducer
const todos = (state = initialState, action: TodoActionTypes) => {
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
          ...state.todos.map((e) => {
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
