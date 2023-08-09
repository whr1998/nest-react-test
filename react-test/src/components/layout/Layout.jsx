import React, { Fragment } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import classes from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <main className={classes.container}>{children}</main>
      <Footer />
    </Fragment>
  );
}
