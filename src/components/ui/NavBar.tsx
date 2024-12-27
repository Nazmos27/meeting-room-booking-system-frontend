import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, useCurrentUser } from "../../redux/features/auth/authSlice";
import { Button, Dropdown, MenuProps } from "antd";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "sonner";
import { HiMenuAlt1 } from "react-icons/hi";
import { primaryButton } from "../../config/themeConfig";

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

const NavBar: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const loggedInUser = useAppSelector(useCurrentUser);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Log out successful");
  };
  const adminItems: MenuProps["items"] = [
    {
      key: "dashboard",
      label: <Link to={"/dashboard"}>Dashboard</Link>,
    },
    {
      key: "logout",
      label: (
        <Button onClick={handleLogout} block type="primary" danger={true}>
          Logout
        </Button>
      ),
    },
  ];
  const userItems: MenuProps["items"] = [
    {
      key: "myBookings",
      label: (
        <Link to={"/my-bookings"}>
          <Button block type="primary">
            My Bookings
          </Button>
        </Link>
      ),
    },
    {
      key: "logout",
      label: (
        <Button onClick={handleLogout} block type="primary" danger={true}>
          Logout
        </Button>
      ),
    },
  ];

  const items: MenuProps["items"] =
    loggedInUser?.role === "admin" ? adminItems : userItems;
  return (
    <div className="navbar ">
      <div className="navContent">
        <div className="flex items-center gap-3">
          <Button
            ghost
            size="middle"
            className="block md:hidden"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <HiMenuAlt1 style={{ fontSize: "20px" }} />
          </Button>
          <Link to={"/"}>
            <img
              className="h-20 w-40 object-cover"
              src="./reserve_it.png"
              alt="logo"
            />
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
          {loggedInUser?.role ? (
            <div>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <FaUserCircle style={{ fontSize: "30px", color: "#000000" }} />
              </Dropdown>
            </div>
          ) : (
            <div>
              <Link to={"/login"}>
                <Button type="primary" style={primaryButton}>
                  Login
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
