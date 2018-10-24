import {
  REQUEST_BOOKS_START,
  REQUEST_BOOKS_OK,
  REQUEST_BOOKS_FAIL
} from './types';

export const requestBooksStart = () => ({
  type:REQUEST_BOOKS_START
});

export const requestBooksOk = (data) => ({
  type:REQUEST_BOOKS_OK,
  data
});

export const requestBooksFail = () => ({
  type:REQUEST_BOOKS_FAIL
});
