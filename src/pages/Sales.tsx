import React from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import SalesList from "../components/SalesList";

const Sales = () => {
  return (
    <div className="container">
      <Sidebar />
      <Content>
        <SalesList />
      </Content>
    </div>
  );
};

export default Sales;
