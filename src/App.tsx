import React from "react";
import Summary from "./pages/Summary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sales from "./pages/Sales";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Summary />} />
        <Route path="/vendas" element={<Sales />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
