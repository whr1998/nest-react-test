import React from "react";
import classes from "./table.module.css";
import { useEffect, useState } from "react";
import { getUserInfoService } from "../../../api/user/user.service";

export default function Table() {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    getUserInfoService().then((res) => {
      if (res.code === 200) {
        setTableData(res.data);
      }
    });
  }, []);
  return (
    <table className={classes.table}>
      <tbody>
        {tableData.map((item) => {
          return (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>
                <input type="button" value="编辑" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
