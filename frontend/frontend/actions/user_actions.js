export const RECEIVE_USER = 'RECEIVE_USER';
export const SET_ADDRESS = 'SET_ADDRESS';
export const SET_NAME = 'SET_NAME';
export const SET_PHONE = 'SET_PHONE';

export const recieveUser = user => ({
  type: RECEIVE_USER,
  user,
});

export const setAddress = address => ({
  type: SET_ADDRESS,
  address,
});

export const setName = name => ({
  type: SET_NAME,
  name,
});

export const setPhone = phone => ({
  type: SET_PHONE,
  phone,
});
