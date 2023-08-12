import React from "react";
import classes from "./Header.module.css";
import { LINKS } from "./Header.const";
import LinkList from "./link-list/link-list";

export default function Header() {
  return (
    <div className={classes.header}>
      <div>This is a header component</div>
      <div>
        <LinkList links={LINKS}></LinkList>
      </div>
    </div>
  );
}
