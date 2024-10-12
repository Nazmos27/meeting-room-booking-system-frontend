import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import DashboardLayout from "../components/layout/DashboardLayout";
import ProtectedLayout from "../components/layout/ProtectedLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/HomePage/Home";
import AllRooms from "../pages/RoomPage/AllRooms";
import Booking from "../pages/UserPage/Booking";
import Checkout from "../pages/UserPage/Checkout";
import MyBookings from "../pages/UserPage/MyBookings";
import RoomDetails from "../pages/RoomPage/RoomDetails";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import WelcomePage from "../pages/AdminPage/WelcomePage";
import RoomManagement from "../pages/AdminPage/RoomManagement";
import CreateRoom from "../pages/AdminPage/CreateRoom";
import UpdateRoom from "../pages/AdminPage/UpdateRoom";
import SlotsManagement from "../pages/AdminPage/SlotsManagement";
import BookingManagement from "../pages/AdminPage/BookingMangement";
import UserManagement from "../pages/AdminPage/UserManagement";
import Login from "../pages/LoginPage";
import SignUp from "../pages/SignupPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "rooms",
        element: <AllRooms />,
      },
      {
        path: "booking/:roomId",
        element: (
          <ProtectedLayout role="user">
            <Booking />
          </ProtectedLayout>
        ),
      },
      {
        path: "booking/:roomId/checkout",
        element: (
          <ProtectedLayout role="user">
            <Checkout />
          </ProtectedLayout>
        ),
      },
      {
        path: "my-bookings",
        element: (
          <ProtectedLayout role="user">
            <MyBookings />
          </ProtectedLayout>
        ),
      },
      {
        path: "rooms/:roomId",
        element: (
          <ProtectedLayout role="user">
            {" "}
            <RoomDetails />
          </ProtectedLayout>
        ),
      },
      {
        path: "about-us",
        element: <AboutPage />,
      },
      {
        path: "contact-us",
        element: <ContactPage />,
      },
      
    ],
  },
  {
    path: "dashboard",
    element: (
      <ProtectedLayout role="admin">
        {" "}
        <DashboardLayout />
      </ProtectedLayout>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: (
          <ProtectedLayout role="admin">
            <WelcomePage />,
          </ProtectedLayout>
        ),
      },
      {
        path: "room-management",
        element: (
          <ProtectedLayout role="admin">
            <RoomManagement />,
          </ProtectedLayout>
        ),
      },
      {
        path: "room-management/create-room",
        element: (
          <ProtectedLayout role="admin">
            <CreateRoom />,
          </ProtectedLayout>
        ),
      },
      {
        path: "room-management/update-room/:roomId",
        element: (
          <ProtectedLayout role="admin">
            <UpdateRoom />,
          </ProtectedLayout>
        ),
      },
      {
        path: "slots-management",
        element: (
          <ProtectedLayout role="admin">
            {" "}
            <SlotsManagement />{" "}
          </ProtectedLayout>
        ),
      },
      {
        path: "booking-management",
        element: (
          <ProtectedLayout role="admin">
            <BookingManagement />,
          </ProtectedLayout>
        ),
      },
      {
        path: "user-management",
        element: (
          <ProtectedLayout role="admin">
            <UserManagement />,
          </ProtectedLayout>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);
export default router;
