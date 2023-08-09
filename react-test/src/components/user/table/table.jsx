import React from "react";
import classes from "./table.module.css";
import { useEffect, useState } from "react";

export default function Table() {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1/api/user/getUserInfo")
      .then((response) => response.json())
      .then((data) => {
        if (data.code === 200) {
          setTableData(data.data);
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
