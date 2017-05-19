import { merge } from 'lodash';
import {
  ADD_ITEM,
  REMOVE_ITEM,
  SET_QUANTITY,
  VERIFY_ORDER } from "../actions/cart_actions.js";

let _defaultState = {};
// state will hold object where keys are itemId and value is number of item.

// cart will be an object with itemId as key and quantity as value

const cartReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {

    case ADD_ITEM:
      if (newState[action.item.id]) {
        newState[action.item.id]++;
      } else {
        newState[action.item.id] = 1;
      }
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;

    case REMOVE_ITEM:
      if (newState[action.itemId]) {
        if (newState[action.itemId] > 1) {
          newState[action.item]--;
        } else {
          delete newState[action.itemId];
        }
      }
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;

    case SET_QUANTITY:
      if (newState[action.itemId]) {
        newState[action.itemId] = action.newQuantity;
      }
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;

    case VERIFY_ORDER:
      newState.verified = action.verfied;
      return newState;

    default:
      return state;
  }
};

export default cartReducer;
