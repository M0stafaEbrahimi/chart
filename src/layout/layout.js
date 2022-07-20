import React from "react";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import "./layout.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <header>header</header>
      <section>{children}</section>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default Layout;
