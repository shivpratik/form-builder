import { ActionTypes } from "../constants/actionTypes";
const intialState = {
  products: [],
};

export const filteredProducts = (state = intialState, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
    case ActionTypes.SORT_PRODUCTS:
    case ActionTypes.SEARCH_PRODUCTS:
    case ActionTypes.FILTER_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
