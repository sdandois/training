import { 
  INPUT_CHANGE,
  ADD_TODO,
  TOGGLE_DONE,
  REMOVE_TODO,
  REMOVE_COMPLETED 
} from '../actions/types';

const INITIAL_STATE = {
  todos:[],
  inputText:'',
  nextId:0
};

const addTodoHelper = (todos, text, nextId) => {
  const newTodo = {
    text,
    done:false,
    id:nextId
  };

  return [...todos, newTodo];
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case INPUT_CHANGE:
    return { ...state, inputText:action.text };
  case ADD_TODO: 
    return { 
      ...state,
      inputText:'',
      todos:addTodoHelper(state.todos, state.inputText, state.nextId),
      nextId:state.nextId+1
    };

  case TOGGLE_DONE:
    return {
      ...state,
      todos:state.todos.map( (todo) => {
        if (todo.id == action.id) {
          return { ...todo, done:!todo.done };
        }

        return todo; 
      })
    };

  case REMOVE_TODO :
    return {
      ...state,
      todos:state.todos.filter( (todo) => {
        return todo.id != action.id;
      } )
    };

  case REMOVE_COMPLETED :
    return {
      ...state,
      todos:state.todos.filter( (todo) => {
        return !todo.done;
      } )
    };

  default:
    return state;
  }
};