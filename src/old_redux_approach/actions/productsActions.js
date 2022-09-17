import { ActionTypes } from "../constants/actionTypes";

export const fetchStart = () => {
  return {
    type: ActionTypes.FETCH_START,
  };
};

export const fetchError = () => {
  return {
    type: ActionTypes.FETCH_ERROR,
  };
};

export const setBank = (bank) => {
  return {
    type: ActionTypes.SET_BANK,
    payload: bank,
  };
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const sortProducts = (products) => {
  return {
    type: ActionTypes.SORT_PRODUCTS,
    payload: products,
  };
};

export const searchProducts = (products) => {
  return {
    type: ActionTypes.SEARCH_PRODUCTS,
    payload: products,
  };
};

export const filterProducts = (products) => {
  return {
    type: ActionTypes.FILTER_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
