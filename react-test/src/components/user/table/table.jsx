import React from "react";
import classes from "./table.module.css";

export default function Table({ tableData, editUser }) {
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
                <input
                  type="button"
                  value="编辑"
                  onClick={() => editUser(item)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
