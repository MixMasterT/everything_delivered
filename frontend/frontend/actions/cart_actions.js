export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SET_QUANTITY = 'SET_QUANTITY';

export const addItem = () => ({
  type: ADD_ITEM
});

export const removeItem = (itemId) => ({
  type: REMOVE_ITEM,
  itemId,
});

export const setQuantity = (itemId, newQuantity) => ({
  type: SET_QUANTITY,
  itemId,
  newQuantity,
});
