import * as React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <div>
      <Link to={"/case-management/create"} >Create Case</Link>+-+
      <Link to={"/case-management/list"} >Case Tracking</Link>+-+
      <Link to={"/case-management/create"} >Create Event</Link>+-+
      <Link to={"/case-management/create"} >Event Tracking</Link>+-+
      <Link to={"/fileUploader"}>Create File</Link>+-+
      <Link to={"/CustomerCreate"}>Create Customer</Link>+-+
     
    </div>
  );
}

export default NavBar;
