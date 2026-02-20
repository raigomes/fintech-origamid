import React from "react";
import Summary from "./pages/Summary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sales from "./pages/Sales";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route index element={<Summary />} />
          <Route path="/vendas" element={<Sales />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
