import {
  Card,
  CardContent,
  Container,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAccountsError, selectedDetails } from "../redux/accountsReducer";
import Header from "./Header";

function DetailsPage() {
  const { trnxId } = useParams();
  const accounts = useSelector((state) => state.accounts);
  const { credit, debit, category, description, transactionDate } =
    accounts.selected;
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchAPI = async () => {
      try {
        console.log("API Fetch Start.");
        const response = await axios.get("/db/bank.json");
        const selectedTrnx = response.data.accounts.find((row) => {
          return row.id.toString() === trnxId.toString();
        });
        dispatch(selectedDetails(selectedTrnx));
      } catch (err) {
        console.log("Err: ", err);
        dispatch(fetchAccountsError());
      }
    };
    fetchAPI();
  }, [trnxId, dispatch]);
  return (
    <Container>
      <Header />
      <Card>
        <CardContent>
          <Table>
            {Object.keys(accounts.selected).length !== 0 ? (
              <TableBody>
                <TableRow>
                  <TableCell sx={{ fontWeight: "500" }}>
                    Transaction Date
                  </TableCell>
                  <TableCell>{transactionDate} </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: "500" }}>Category</TableCell>
                  <TableCell>{category} </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: "500" }}>Description</TableCell>
                  <TableCell>{description} </TableCell>
                </TableRow>
                {debit && (
                  <TableRow>
                    <TableCell sx={{ fontWeight: "500" }}>Debit</TableCell>
                    <TableCell>{debit} </TableCell>
                  </TableRow>
                )}
                {credit && (
                  <TableRow>
                    <TableCell sx={{ fontWeight: "500" }}>Credit</TableCell>
                    <TableCell>{credit} </TableCell>
                  </TableRow>
                )}
              </TableBody>
            ) : (
              <TableBody>
                <TableRow>
                  <TableCell colSpan={2}>Loading...</TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </CardContent>
      </Card>
    </Container>
  );
}

export default DetailsPage;
