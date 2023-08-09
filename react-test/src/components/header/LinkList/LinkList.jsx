import React from "react";
import LinkItem from "../LinkItem/LinkItem";
import classes from "./LinkList.module.css";

export default function LinkList({ links }) {
  return (
    <ul className={classes.list}>
      {links.map((link) => {
        return <LinkItem key={link.key} link={link}></LinkItem>;
      })}
    </ul>
  );
}
