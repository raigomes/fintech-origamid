import React from "react";
import Summary from "./pages/Summary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sales from "./pages/Sales";
import MainLayout from "./pages/MainLayout";
import SalesItem from "./pages/SalesItem";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Summary />} />
          <Route path="/vendas" element={<Sales />} />
          <Route path="/vendas/:id" element={<SalesItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
