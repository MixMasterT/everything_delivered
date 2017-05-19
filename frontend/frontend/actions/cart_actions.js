export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SET_QUANTITY = 'SET_QUANTITY';
export const VERIFY_ORDER = 'VERIFY_ORDER';
//do verifications once per order instead of by user,
//give boolean in state and reset upon completion/timeout

export const verifyOrder = (isVerified) => ({
  type: VERIFY_ORDER,
  verified: isVerified
})

export const addItem = (item) => ({
  type: ADD_ITEM,
  item,
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
