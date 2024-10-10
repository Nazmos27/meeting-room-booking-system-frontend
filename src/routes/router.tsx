import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import LoginPage from "../pages/LoginPage";
import Home from "../pages/HomePage/Home";
import ErrorPage from "../pages/ErrorPage";
import SignupPage from "../pages/SignupPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
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
