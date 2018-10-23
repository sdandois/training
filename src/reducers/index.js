import { combineReducers } from 'redux';

import TodosReducer from './TodosReducer';

export default combineReducers({
  todosStore: TodosReducer
});
