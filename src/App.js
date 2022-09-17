import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BankPage from "./components/BankPage";
import "./App.css";
import DetailsPage from "./components/DetailsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<BankPage />} />
          <Route path="/details/:trnxId" element={<DetailsPage />} />
          <Route path="*">404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
