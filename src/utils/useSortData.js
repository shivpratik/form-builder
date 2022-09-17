import React from "react";
import { useDispatch } from "react-redux";
import { sortAccounts } from "../redux/accountsReducer";

export default function useSortData(
  items,
  config = { key: "transactionDate", direction: "descending" }
) {
  const [sortConfig, setSortConfig] = React.useState(config);
  const [order, setOrder] = React.useState("desc");
  const [orderBy, setOrderBy] = React.useState("transactionDate");
  const dispatch = useDispatch();

  const sortedItems = React.useMemo(() => {
    if (Object.keys(items).length !== 0) {
      let sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }
  }, [items, sortConfig]);

  const requestSort = (key) => {
    const isAsc = orderBy === key && order === "asc";
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }

    dispatch(sortAccounts(sortedItems));

    setSortConfig({ key, direction });
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(key);
  };
  return { requestSort, order, orderBy };
}
