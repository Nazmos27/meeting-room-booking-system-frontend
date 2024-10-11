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
      label: <Link to={"/my-bookings"}>My Bookings</Link>,
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
    <div className="fixed top-0 left-0 z-20 w-full backdrop-blur-sm bg-[#002349]">
      <div className="w-[95%] mx-auto flex justify-between items-center relative">
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
            <img className="h-20 w-40 object-cover scale-150" src="./logo.png" alt="logo" />
          </Link>
        </div>
        <div
          className={`flex flex-col  absolute top-[59px] left-[62px] bg-[#75dce072] w-[200px] items-start p-[20px_15px] justify-center gap-5 ${
            isOpenMenu ? "flex backdrop-blur-sm" : "hidden"
          }`}
        >
          {menuItems.map((item) => (
            <div key={item.path}>
              <NavLink
                to={`${item.path}`}
                className={({ isActive }) =>
                  isActive ? "active-route navItem" : "no-underline font-semibold text-white pb-[3px] relative"
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
                <FaUserCircle style={{ fontSize: "30px", color: "#fff" }} />
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
