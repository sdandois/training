import { REQUEST_BOOKS, REQUEST_BOOKS_SUCCESS } from '../actions/types';

import { STATUS_WAIT, STATUS_OK, STATUS_ERROR } from './constants';

const INITIAL_STATE = {
  status: STATUS_WAIT,
  data: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_BOOKS:
      return { status: STATUS_WAIT, data: [] };
    case REQUEST_BOOKS_SUCCESS:
      return { status: STATUS_OK, data: action.data };
    default:
      // if error or unrecognized action, show empty
      return { status: STATUS_ERROR, data: [] };
  }
};
