import { combineReducers } from 'redux';
import cartReducer from './cart_reducer.js';
import userReducer from './user_reducer.js';
import messagesReducer from './messages_reducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  messages: messagesReducer,
});

export default rootReducer;
