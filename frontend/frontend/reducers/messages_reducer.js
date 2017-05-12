import { merge } from 'lodash';
import {
  CLEAR_MESSAGES,
  ADD_MESSAGE } from "../actions/messages_actions.js";

let _defaultState = {};

const messagesReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  
  switch(action.type) {
    case CLEAR_MESSAGES:
      // your code here
    case ADD_MESSAGE:
      // your code here
    default:
      return state;
  }
};

export default messagesReducer;
