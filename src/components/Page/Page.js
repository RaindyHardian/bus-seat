import React from "react";
import Navbar from "../../features/Navbar/Navbar";
import Footer from "../Footer/Footer";

const Page = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Page;
