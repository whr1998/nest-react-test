import React, { Fragment } from "react";
import AddUser from "../../components/user/add-user/AddUser";
import { addUserService } from "../../api/user/user.service";
import { useNavigate } from "react-router-dom";

export default function AddUserPage() {
  const navigate = useNavigate();
  function addUser(name, age) {
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
      <AddUser addUser={addUser} />
    </Fragment>
  );
}
