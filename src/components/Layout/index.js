import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = (props) => {
  return (
    <>
      <div className="wrapper-content-block">
        <Header />
        {props.children}
        <Footer />
      </div>
      {/* <ToastContainer autoClose={2000} /> */}

    </>
  );
};

export default Layout;
 