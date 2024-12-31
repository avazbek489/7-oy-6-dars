import React from "react";
import Header from "../pages/Header";
import Login from "../pages/Login";

function MainLayout({ children }) {
  return (
    <div>
        <Login />
      <Header />
      {children}
    </div>
  );
}

export default MainLayout;
