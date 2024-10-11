import { Avatar } from "antd";
import * as React from "react";
import { FaPlus } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import DropDown from "../DropDown";
import classes from "./NavBar.module.scss";

function NavBar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navItems}>
        <div className={classes.menuIcon}>
          <HiMenu />
        </div>
        <div className={classes.navItem}>
          <Link className={classes.navLink} to={"/case-management"}>
            <FaPlus />
            <span>Create Case</span>
          </Link>
        </div>
        <div className={classes.navItem}>
          <DropDown title={"Case Tracking"} />
        </div>
        <div className={classes.navItem}>
          <DropDown title="Calender View" />
        </div>
      </div>{" "}
      <div className={classes.navItems}>
        <div className={`${classes.navItem} ${classes.icons}`}>
          <IoSearch />
          <IoMdNotifications />
        </div>
        <div className={`${classes.navItem} ${classes.profile}`}>
          <Avatar style={{ backgroundColor: "#003768", marginRight: "8px" }}>
            UK
          </Avatar>
          <DropDown title="Unknown" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

{
  /* <Link to={"/case-management/create"} >Create Case</Link>+-+
<Link to={"/case-management/list"} >Case Tracking</Link>+-+
<Link to={"/case-management/create"} >Create Event</Link>+-+
<Link to={"/case-management/create"} >Event Tracking</Link>+-+
<Link to={"/fileUploader"}>Create File</Link>+-+ */
}
