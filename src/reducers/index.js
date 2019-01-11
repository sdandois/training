import { combineReducers } from 'redux';

import TodosReducer from './TodosReducer';
import BooksReducer from './BooksReducer';

export default combineReducers({
  todosStore: TodosReducer,
  booksStore: BooksReducer
});
