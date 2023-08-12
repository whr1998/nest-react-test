import React, { Fragment } from "react";
import Table from "../../components/user/table/table";
import { useEffect, useState } from "react";
import { getUserInfoService } from "../../api/user/user.service";

export default function UserListPage() {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    getUserInfoService().then((res) => {
      if (res.code === 200) {
        setTableData(res.data);
      }
    });
  }, []);
  function editUser(item) {}
  return (
    <Fragment>
      <Table tableData={tableData} editUser={editUser} />
    </Fragment>
  );
}
