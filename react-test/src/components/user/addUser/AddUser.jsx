import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUserService } from "../../../api/user/user.service";

export default function AddUser() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  function saveDataSource(formType) {
    return (event) => {
      const { value } = event.target;
      if (formType === "name") {
        setName(value);
      }
      if (formType === "age") {
        setAge(Number(value));
      }
    };
  }
  function addUser(event) {
    event.preventDefault();
    const dataSource = {
      name,
      age,
    };
    addUserService(dataSource).then((res) => {
      if (res.code === 200) {
        navigate("/");
      }
    });
  }
  return (
    <Fragment>
      <form onSubmit={addUser} id="form">
        <div>
          <label htmlFor="name">姓名：</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={saveDataSource("name")}
          />
        </div>
        <div>
          <label htmlFor="age">年龄：</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={saveDataSource("age")}
          />
        </div>
        <div>
          <input type="submit" value="添加" />
        </div>
      </form>
    </Fragment>
  );
}
