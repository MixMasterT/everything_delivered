import { merge } from 'lodash';
import {
  ADD_ITEM,
  REMOVE_ITEM,
  SET_QUANTITY } from "../actions/cart_actions.js";

let _defaultState = {};

const cartReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case ADD_ITEM:
      // your code here
    case REMOVE_ITEM:
      // your code here
    case SET_QUANTITY:
      // your code here
    default:
      return state;
  }
};

export default cartReducer;