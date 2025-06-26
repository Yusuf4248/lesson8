import React from "react";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <h1>Main logs</h1>
      <Outlet />
    </div>
  );
};

export default Index;
