import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import DashboardLayout from "../components/layout/DashboardLayout";

import ProtectedLayout from "../components/layout/ProtectedLayout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "rooms",
        element: <Rooms />,
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
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
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
    errorElement: <Error />,
    children: [
      {
        path: "/dashboard",
        element: (
          <ProtectedLayout role="admin">
            <WelcomeAdmin />,
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
