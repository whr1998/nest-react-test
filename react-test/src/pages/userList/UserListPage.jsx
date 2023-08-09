import React, { Fragment } from "react";
import Table from "../../components/user/table/table";
import { LINKS } from "../../components/header/Header.const";

export default function UserListPage() {
  return (
    <Fragment>
      <Table links={LINKS} />
    </Fragment>
  );
}
