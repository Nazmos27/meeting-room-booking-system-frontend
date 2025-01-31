import { Layout, Menu } from "antd";
import React from "react";
import type { MenuProps } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { RiHomeGearFill } from "react-icons/ri";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaUserShield } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import NavBar from "../ui/NavBar";
import FooterSection from "../ui/Footer";
import { Helmet } from "react-helmet-async";
type MenuItem = Required<MenuProps>["items"][number];

const { Content, Sider } = Layout;

const DashboardLayout: React.FC = () => {
  const items: MenuItem[] = [
    {
      key: "roomManagement",
      icon: <RiHomeGearFill />,
      label: (
        <NavLink to={"/dashboard/room-management"}>Room Management</NavLink>
      ),
    },
    {
      key: "slotsManagement",
      icon: <BsPersonWorkspace />,
      label: (
        <NavLink to={"/dashboard/slots-management"}>Slots Management</NavLink>
      ),
    },
    {
      key: "bookingManagement",
      icon: <FaUserShield />,
      label: (
        <NavLink to={"/dashboard/booking-management"}>
          Booking Management
        </NavLink>
      ),
    },
    {
      key: "userManagement",
      icon: <FaUsersGear />,
      label: (
        <NavLink to={"/dashboard/user-management"}>User Management</NavLink>
      ),
    },
  ];

  return (
    <Layout >
      <Helmet>
        <title>Reserve It | Dashboard</title>
      </Helmet>
      <div>
        <NavBar />
      </div>
      <Content style={{ minHeight: "100vh", width: "100%" }}>
        <Layout style={{ padding: "24px 0" }}>
          <Sider
            breakpoint="lg"
            style={{
              position: "fixed",
              top: "80px",
              left: 0,
            }}
            width={200}
          >
            <Menu mode="inline" style={{ minHeight: "100vh" }} items={items} />
          </Sider>
          <Content className="dashboard-content">
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <FooterSection />
    </Layout>
  );
};

export default DashboardLayout;
