import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Dropdown, MenuProps } from "antd";
import { FaUserCircle } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";

type TMenuItem = {
  label: string;
  path: string;
};

const menuItems: TMenuItem[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Rooms",
    path: "/rooms",
  },
  {
    label: "About Us",
    path: "/about-us",
  },
  {
    label: "Contact Us",
    path: "/contact-us",
  },
];

const Navbar: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const adminItems: MenuProps["items"] = [
    {
      key: "dashboard",
      label: <Link to={"/dashboard"}>Dashboard</Link>,
    },
    {
      key: "logout",
      label: (
        <Button block type="primary" danger={true}>
          Logout
        </Button>
      ),
    },
  ];
  const userItems: MenuProps["items"] = [
    {
      key: "myBookings",
      label: <Link to={"/my-bookings"}>My Bookings</Link>,
    },
    {
      key: "logout",
      label: (
        <Button block type="primary" danger={true}>
          Logout
        </Button>
      ),
    },
  ];

  const items: MenuProps["items"] = adminItems;
  return (
    <div className="navbar">
      <div className="navContent">
        <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
          <Button
            ghost
            size="middle"
            className="menuTriggerButton"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <HiMenuAlt1 style={{ fontSize: "20px" }} />
          </Button>
          <Link to={"/"}>
            <img style={{ width: "100px" }} src="./logo.png" alt="logo" />
          </Link>
        </div>
        <div
          className={`nav-link-container ${
            isOpenMenu ? "openedNav" : "closedNav"
          }`}
        >
          {menuItems.map((item) => (
            <div key={item.path}>
              <NavLink
                to={`${item.path}`}
                className={({ isActive }) =>
                  isActive ? "active-route navItem" : "navItem"
                }
              >
                {item.label}
              </NavLink>
            </div>
          ))}
        </div>
        <div>
          {
            <div>
              <Link to={"/login"}>
                <Button type="primary" style={{ backgroundColor: "blue" }}>
                  Login
                </Button>
              </Link>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
