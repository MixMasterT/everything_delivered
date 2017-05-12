import { merge } from 'lodash';
import {
  SET_ADDRESS,
  SET_NAME,
  SET_PHONE } from "../actions/user_actions.js";

let _defaultState = {
  address: '',
  name: '',
  phone: '',
};

const userReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  
  switch(action.type) {
    case SET_ADDRESS:
      // your code here
    case SET_NAME:
      // your code here
    case SET_PHONE:
      // your code here
    default:
      return state;
  }
};

export default userReducer;
