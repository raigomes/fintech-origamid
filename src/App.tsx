import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Summary from "./pages/Summary";
import Sales from "./pages/Sales";
import MainLayout from "./pages/MainLayout";
import SalesItem from "./pages/SalesItem";
import { VendasProvider } from "./context/VendasContext";

const App = () => {
  return (
    <VendasProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Summary />} />
            <Route path="/vendas" element={<Sales />} />
            <Route path="/vendas/:id" element={<SalesItem />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </VendasProvider>
  );
};

export default App;
