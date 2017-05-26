import { merge } from 'lodash';

import { RECEIVE_USER,
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
  let newState = merge({}, state);

  switch(action.type) {

    case RECEIVE_USER:
      console.log('recieve user handles in Reducer');
      console.log(action.user);
      localStorage.setItem('user', JSON.stringify(action.user));
      return action.user;

    case SET_ADDRESS:
      newState['address'] = action.address;
      localStorage.setItem('user', JSON.stringify(newState));
      return newState;

    case SET_NAME:
      newState['name'] = action.name;
      localStorage.setItem('user', JSON.stringify(newState));
      return newState;

    case SET_PHONE:
      newState['phone'] = action.phone;
      localStorage.setItem('user', JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
};

export default userReducer;
