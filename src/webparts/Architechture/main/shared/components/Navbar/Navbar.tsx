import { Avatar } from "antd";
import * as React from "react";
import { FaPlus } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import DropDown from "../DropDown";
import classes from "./NavBar.module.scss";

function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className={classes.navbar}>
      <div className={classes.navItems}>
        <div className={classes.menuIcon} onClick={() => navigate("/")}>
          <HiMenu />
        </div>
        <div className={classes.navItem}>
          <Link className={classes.navLink} to={"/case-management"}>
            Demo List
          </Link>
        </div>
        <div className={classes.navItem}>
          <DropDown
            title="Demo CRUD"
            items={[
              {
                key: "1",
                label: <Link to={"/employee/list"}>List</Link>,
              },
              {
                key: "2",
                label: <Link to={"/employee/registration"}>Create</Link>,
              },
            ]}
          />
        </div>
        <div className={classes.navItem}>
          <Link className={classes.navLink} to={"/fileUploader"}>
            <FaPlus />
            <span>File Upload</span>
          </Link>
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
