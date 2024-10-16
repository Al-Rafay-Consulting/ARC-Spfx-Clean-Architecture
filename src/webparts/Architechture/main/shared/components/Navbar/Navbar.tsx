import * as React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to={"/"}>Home</Link>+-+
      <Link to={"/case-management/create"}>Create Case</Link>+-+
      <Link to={"/case-management/list"}>Case Tracking</Link>+-+
      <Link to={"/employee/registration"}>Create Employee</Link>+-+
      <Link to={"/employee/list"}>Emlpoyees List</Link>+-+
      <Link to={"/fileUploader"}>Create File</Link>+-+
      <Link to = {"/ImageUploader"}>Upload Image</Link>
    </div>
  );
}

export default NavBar;
