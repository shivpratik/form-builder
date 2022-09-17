import { Container } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const bankInfo = useSelector((state) =>
    Object.keys(state.bank).length !== 0 ? state.bank.metaData : {}
  );
  return (
    <Container>
      {Object.keys(bankInfo).length === 0 ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <h1>{bankInfo.title}</h1>
          <p>{bankInfo.longDesc}</p>
        </div>
      )}
    </Container>
  );
};

export default Header;
