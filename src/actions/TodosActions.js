import {
  INPUT_CHANGE,
  ADD_TODO, 
  TOGGLE_DONE,
  REMOVE_TODO,
  REMOVE_COMPLETED
} from './types';

export const changeInput = (text) => {
  return {
    type:INPUT_CHANGE,
    text
  };
};

export const addTodo = () => {
  return {
    type:ADD_TODO
  };
};

export const toggleDone = (id) => {
  return {
    type: TOGGLE_DONE,
    id
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id
  };
};

export const removeCompleted = () => {
  return {
    type:REMOVE_COMPLETED
  };
};
