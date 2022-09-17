import { createSlice } from "@reduxjs/toolkit";

export const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    original: {},
    filtered: {},
    selected: {},
    pending: true,
    error: false,
  },
  reducers: {
    fetchAccountsSuccess: (state, action) => {
      state.original = action.payload;
      state.filtered = action.payload;
      state.pending = false;
    },
    sortAccounts: (state, action) => {
      state.filtered = action.payload;
      state.pending = false;
    },
    searchAccounts: (state, action) => {
      state.filtered = action.payload;
      state.pending = false;
    },
    filterAccounts: (state, action) => {
      state.filtered = action.payload;
      state.pending = false;
    },
    selectedDetails: (state, action) => {
      state.selected = action.payload;
      state.pending = false;
    },
    clearFilter: (state, action) => {
      state.filtered = action.payload;
      state.pending = false;
    },
    fetchAccountsError: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const {
  fetchAccountsStart,
  fetchAccountsSuccess,
  sortAccounts,
  searchAccounts,
  filterAccounts,
  selectedDetails,
  clearFilter,
  fetchAccountsError,
} = accountsSlice.actions;
export default accountsSlice.reducer;
