import {
  ADD_TODO,
  DONE_TODO,
  REMOVE_TODO,
  REMOVE_DONE_TODO,
} from '../actions/ActionTypes';

const INITIAL_STATE = {todos: [], doneTodos: []};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {...state, todos: [...state.todos, action.payload]}; //state maintain ...state
    case REMOVE_TODO:
      return {...state, todos: handleRemoveTodo(action.payload, state.todos)};
    case DONE_TODO:
      return {...state, doneTodos: [...state.doneTodos, action.payload]};
    case REMOVE_DONE_TODO:
      return {
        ...state,
        doneTodos: handleRemoveTodo(action.payload, state.doneTodos),
      };
    default:
      return state;
  }
};

const handleRemoveTodo = (item, todos) => {
  const todoIndex = todos.indexOf(item);
  todos.splice(todoIndex, 1);
  return todos;
};

export default todoReducer;
