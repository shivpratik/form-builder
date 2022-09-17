import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchBankError, fetchBankSuccess } from "../redux/bankReducer";
import DataTable from "./Table/DataTable";
import { Container } from "@mui/system";
import TableFilter from "./Table/TableFilter";
import Header from "./Header";
import {
  fetchAccountsError,
  fetchAccountsSuccess,
} from "../redux/accountsReducer";

const BankPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        console.log("API Fetch Start.");
        const response = await axios.get("/db/bank.json");
        dispatch(fetchBankSuccess(response.data));
        dispatch(fetchAccountsSuccess(response.data.accounts));
      } catch (err) {
        console.log("Err: ", err);
        dispatch(fetchBankError());
        dispatch(fetchAccountsError());
      }
    };
    fetchAPI();
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <TableFilter />
      <DataTable />
    </Container>
  );
};

export default BankPage;
