import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="h-full w-full fixed inset-0 flex flex-col">
      <Navbar />
      <div className="h-full pt-[50px]">{children}</div>
    </div>
  );
}

export default Layout;
