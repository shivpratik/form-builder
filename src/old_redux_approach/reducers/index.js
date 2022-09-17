import { combineReducers } from "redux";
import { filteredProducts, selectedProductsReducer } from "./filteredProducts";
import { bankSlice } from "./bankReducer";
const reducers = combineReducers({
  bankInfo: bankSlice,
  product: selectedProductsReducer,
  transactions: filteredProducts,
});
export default reducers;
