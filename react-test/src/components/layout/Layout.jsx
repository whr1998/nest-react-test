import React, { Fragment } from "react";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import classes from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <main className={classes.container}>{children}</main>
      <Footer />
    </Fragment>
  );
}
