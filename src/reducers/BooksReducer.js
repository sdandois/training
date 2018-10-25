import {
  REQUEST_BOOKS_START,
  REQUEST_BOOKS_OK,
} from '../actions/types';

import { STATUS_READY, STATUS_WAIT, STATUS_OK, STATUS_ERROR } from './constants';

const INITIAL_STATE = {
  status: STATUS_READY,
  data: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_BOOKS_START:
      return { status: STATUS_WAIT, data: [] };
    case REQUEST_BOOKS_OK:
      return { status: STATUS_OK, data: action.data };
    default:
      // if error or unrecognized action, show empty
      return { status: STATUS_ERROR, data: [] };
  }
};
