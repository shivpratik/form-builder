import React from "react";
import {
  Paper,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import useSortData from "../../utils/useSortData";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function DataTable() {
  const accounts = useSelector((state) =>
    Object.keys(state.accounts).length !== 0 ? state.accounts : {}
  );
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { requestSort, order, orderBy } = useSortData(accounts.filtered);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const headCells = [
    {
      id: "transactionDate",
      numeric: false,
      disablePadding: false,
      label: "Date",
    },
    {
      id: "description",
      numeric: false,
      disablePadding: false,
      label: "Description",
    },
    {
      id: "category",
      numeric: false,
      disablePadding: false,
      label: "Category",
    },
    {
      id: "debit",
      numeric: true,
      disablePadding: false,
      label: "Debit",
    },
    {
      id: "credit",
      numeric: true,
      disablePadding: false,
      label: "Credit",
    },
    {
      id: "action",
      numeric: true,
      disablePadding: false,
      label: "Action",
    },
  ];

  return (
    <Paper elevation={3}>
      <Box p={2}>
        <TableContainer p={2}>
          <Table>
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    align={headCell.numeric ? "right" : "left"}
                    padding={headCell.disablePadding ? "none" : "normal"}
                    sortDirection={orderBy === headCell.id ? order : false}
                  >
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : "asc"}
                      onClick={(e) => requestSort(headCell.id)}
                    >
                      {headCell.label}
                      {orderBy === headCell.id ? (
                        <Box component="span" sx={visuallyHidden}>
                          {order === "desc"
                            ? "sorted descending"
                            : "sorted ascending"}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(accounts.filtered).length !== 0 ? (
                accounts.filtered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.transactionDate}</TableCell>
                      <TableCell>{row.description}</TableCell>
                      <TableCell>{row.category}</TableCell>
                      <TableCell align="right">{row.debit}</TableCell>
                      <TableCell align="right">{row.credit}</TableCell>
                      <TableCell align="right">
                        <Link to={`/details/${row.id}`}>Details</Link>
                      </TableCell>
                    </TableRow>
                  ))
              ) : (
                <TableRow>
                  <TableCell colSpan="6" align="center">
                    {accounts.error && (
                      <span className="error">Something went wrong!</span>
                    )}
                    {accounts.pending === true && (
                      <span className="success">Loading Data...</span>
                    )}
                    {Object.keys(accounts.filtered).length === 0 &&
                      accounts.pending === false && (
                        <span className="success">No Records Found</span>
                      )}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {Object.keys(accounts.filtered).length !== 0 && (
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={accounts.filtered.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </Box>
    </Paper>
  );
}

export default DataTable;
