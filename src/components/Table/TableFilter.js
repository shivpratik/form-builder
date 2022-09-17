import React from "react";
import { Paper, Grid, Box, TextField, Button } from "@mui/material";
import DateRangePicker from "./DateRangePicker";
import { useDispatch, useSelector } from "react-redux";
import { clearFilter, searchAccounts } from "../../redux/accountsReducer";

function TableFilter() {
  const accounts = useSelector((state) => state.accounts);
  const searchInputRef = React.useRef("");
  const [searchQuery, setSearchQuery] = React.useState("");
  const dispatch = useDispatch();

  const requestSearch = (query) => {
    setSearchQuery(query);
    const filteredRows = accounts.original.filter((row) => {
      return row.description.toLowerCase().includes(query.toLowerCase());
    });
    dispatch(searchAccounts(filteredRows));
  };

  const handleClearFilter = () => {
    setSearchQuery("");
    dispatch(clearFilter(accounts.original));
  };

  return (
    <Paper elevation={3}>
      <Box mb={2} p={2}>
        <Grid
          container
          rowSpacing={1}
          justifyContent="center"
          alignItems="center"
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} md={5}>
            <TextField
              ref={searchInputRef}
              fullWidth
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => requestSearch(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <DateRangePicker></DateRangePicker>
          </Grid>
          <Grid item xs={12} md={2}>
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={(e) => handleClearFilter()}
            >
              Clear Filter
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default TableFilter;
