import React from "react";
import classes from "./link-item.module.css";
import { Link } from "react-router-dom";

export default function LinkItem({ link }) {
  return (
    <li className={classes.item}>
      <Link className={classes.link} to={link.href}>
        {link.name}
      </Link>
    </li>
  );
}
