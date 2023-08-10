import React, { Fragment } from "react";
import Table from "../../components/user/table/table";
import { useEffect, useState } from "react";
import { getUserInfoService } from "../../api/user/user.service";
import Dialog from "../../components/dialog/Dialog";

export default function UserListPage() {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    getUserInfoService().then((res) => {
      if (res.code === 200) {
        setTableData(res.data);
      }
    });
  }, []);
  function editUser(item) {
    console.log(item);
    <Dialog isOpen={true} />;
  }
  return (
    <Fragment>
      <Table tableData={tableData} editUser={editUser} />
    </Fragment>
  );
}
