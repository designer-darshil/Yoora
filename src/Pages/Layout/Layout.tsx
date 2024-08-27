import Header from "@/Components/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    // <main className="px-16 max-md:px-6">
    <main>
      <Header />
      <div className="py-8">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
