import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import LoginPage from "../pages/LoginPage";
import Home from "../pages/HomePage/Home";
import ErrorPage from "../pages/ErrorPage";
import SignupPage from "../pages/SignupPage";
import AllRooms from "../pages/RoomPage/AllRooms";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";


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
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "signup",
    element: <SignupPage />,
  },
]);
export default router;
