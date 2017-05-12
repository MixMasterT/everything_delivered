export const CLEAR_MESSAGES = 'CLEAR_MESSAGES';
export const ADD_MESSAGE = 'ADD_MESSAGE';

export const clearMessages = () => ({
  type: CLEAR_MESSAGES,
});

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message,
});
