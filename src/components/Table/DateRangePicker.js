import React from "react";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Box, Stack, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { filterAccounts } from "../../redux/accountsReducer";

function DateRangePicker() {
  // date state
  const [range, setRange] = React.useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // Fetch Accounts
  const accounts = useSelector((state) =>
    Object.keys(state.accounts).length !== 0 ? state.accounts : {}
  );

  // Filter By Date
  const dispatch = useDispatch();
  const requestFilter = (selectedRange) => {
    if (Object.keys(accounts).length !== 0) {
      let result = accounts.original.filter((row) => {
        let startDate = new Date(
          format(selectedRange[0].startDate, "yyyy-MM-dd")
        )
          .getTime()
          .toString();
        let endDate = new Date(format(selectedRange[0].endDate, "yyyy-MM-dd"))
          .getTime()
          .toString();
        let date = new Date(row.transactionDate).getTime();
        return startDate < date && date < endDate;
      });
      console.log(result);
      // return result;
      dispatch(filterAccounts(result));
    }
  };

  // open close
  const [open, setOpen] = React.useState(false);

  // get the target element to toggle
  const refOne = React.useRef(null);

  React.useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div className="calendarWrap">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <TextField
          fullWidth
          value={`${format(range[0].startDate, "dd/MM/yyyy")}`}
          readOnly
          onClick={() => setOpen((open) => !open)}
        />
        <Box>to</Box>
        <TextField
          fullWidth
          value={`${format(range[0].endDate, "dd/MM/yyyy")}`}
          readOnly
          onClick={() => setOpen((open) => !open)}
        />
      </Stack>

      <div ref={refOne}>
        {open && (
          <DateRange
            onChange={(item) => {
              setRange([item.selection]);
              requestFilter([item.selection]);
            }}
            editableDateInputs={false}
            moveRangeOnFirstSelection={true}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement"
          />
        )}
      </div>
    </div>
  );
}

export default DateRangePicker;
