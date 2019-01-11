import { REQUEST_BOOKS, REQUEST_BOOKS_SUCCESS, REQUEST_BOOKS_FAILURE } from './types';

export const requestBooks = () => ({
  type: REQUEST_BOOKS
});

export const requestBooksSuccess = data => ({
  type: REQUEST_BOOKS_SUCCESS,
  data
});

export const requestBooksFailure = () => ({
  type: REQUEST_BOOKS_FAILURE
});
