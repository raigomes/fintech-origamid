import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

const MainLayout = () => {
  return (
    <div className="container">
      <Sidebar />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
};

export default MainLayout;
