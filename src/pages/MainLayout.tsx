import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../features/Sidebar";
import Content from "../features/Content";

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
