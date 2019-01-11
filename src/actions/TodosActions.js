import {
  INPUT_CHANGE,
  ADD_TODO, 
  TOGGLE_DONE,
  REMOVE_TODO,
  REMOVE_COMPLETED
} from './types';

export const changeInput = text => ({
  type: INPUT_CHANGE,
  text
});

export const addTodo = () => ({
  type: ADD_TODO
});

export const toggleDone = id => ({
  type: TOGGLE_DONE,
  id
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
});

export const removeCompleted = () => ({
  type: REMOVE_COMPLETED
});
