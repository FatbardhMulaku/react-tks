import React from "react";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer/Footer";

const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
