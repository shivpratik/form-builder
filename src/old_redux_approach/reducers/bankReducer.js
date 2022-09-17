import { ActionTypes } from "../constants/actionTypes";
const intialState = {
  bank: [],
  pending: false,
  error: false,
};

export const bankReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_START:
      return { pending: true };
    case ActionTypes.SET_BANK:
      return { ...state, bank: payload, pending: false };
    case ActionTypes.FETCH_ERROR:
      return { pending: false, error: true };
    default:
      return state;
  }
};
