import React from "react";
import LinkItem from "../link-item/link-item";
import classes from "./link-list.module.css";

export default function LinkList({ links }) {
  return (
    <ul className={classes.list}>
      {links.map((link) => {
        return <LinkItem key={link.key} link={link}></LinkItem>;
      })}
    </ul>
  );
}
