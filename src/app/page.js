import Home from "@/components/Home";
import React from "react";
import { ToastContainer } from "react-toastify";

function page() {
  return (
    <div>
      <Home />
      <ToastContainer />
    </div>
  );
}

export default page;
