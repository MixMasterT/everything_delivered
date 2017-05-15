import { merge } from 'lodash';
import {
          CLEAR_MESSAGES,
          ADD_MESSAGE
        } from "../actions/message_actions.js";

let _defaultState = [];

const messagesReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case CLEAR_MESSAGES:
      return [];
    case ADD_MESSAGE:
      return [...state, action.message];
    default:
      return state;
  }
};

export default messagesReducer;
