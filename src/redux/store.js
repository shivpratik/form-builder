import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from "./accountsReducer";
import bankReducer from "./bankReducer";

export default configureStore({
  reducer: {
    bank: bankReducer,
    accounts: accountsReducer,
  },
});
