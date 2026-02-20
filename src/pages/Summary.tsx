import React from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import SalesSummary from "../components/SalesSummary";
import SalesGraph from "../components/SalesGraph";

const Summary = () => {
  return (
    <div className="container">
      <Sidebar />
      <Content>
        <SalesSummary />
        <SalesGraph />
      </Content>
    </div>
  );
};

export default Summary;
