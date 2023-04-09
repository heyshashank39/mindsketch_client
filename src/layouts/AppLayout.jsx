import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const AppLayout = ({ children }) => {
  return (
    <section>
      <Header />

      <main>{children}</main>
      <Footer />
    </section>
  );
};

export default AppLayout;
