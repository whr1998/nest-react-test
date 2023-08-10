import React, { Fragment, useRef } from "react";

export default function AddUser({ addUser }) {
  const nameRef = useRef();
  const ageRef = useRef();
  function addUserHandle(event) {
    event.preventDefault();
    addUser(nameRef.current.value, Number(ageRef.current.value));
  }
  return (
    <Fragment>
      <form id="form" onSubmit={addUserHandle}>
        <div>
          <label htmlFor="name">姓名：</label>
          <input id="name" type="text" ref={nameRef} />
        </div>
        <div>
          <label htmlFor="age">年龄：</label>
          <input id="age" type="number" ref={ageRef} />
        </div>
        <div>
          <input type="submit" value="添加" />
        </div>
      </form>
    </Fragment>
  );
}
