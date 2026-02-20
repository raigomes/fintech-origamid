import React from "react";
import Summary from "./pages/Summary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sales from "./pages/Sales";
import MainLayout from "./pages/MainLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Summary />} />
          <Route path="/vendas" element={<Sales />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
