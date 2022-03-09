import {
  ADD_TODO,
  DONE_TODO,
  REMOVE_TODO,
  REMOVE_DONE_TODO,
} from './ActionTypes';

export const AddTodo = payload => ({type: ADD_TODO, payload});

export const RemoveTodo = payload => ({type: REMOVE_TODO, payload});

export const DoneTodo = payload => ({type: DONE_TODO, payload});

export const RemoveDoneTodo = payload => ({type: REMOVE_DONE_TODO, payload});
