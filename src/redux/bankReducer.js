import { createSlice } from "@reduxjs/toolkit";

export const bankSlice = createSlice({
  name: "bank",
  initialState: {
    metaData: {},
    accounts: {},
    pending: true,
    error: false,
  },
  reducers: {
    fetchBankSuccess: (state, action) => {
      state.metaData = action.payload.metaData[0];
      state.accounts = action.payload.accounts;
      state.pending = false;
    },
    fetchBankError: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { fetchBankStart, fetchBankSuccess, fetchBankError } =
  bankSlice.actions;
export default bankSlice.reducer;
