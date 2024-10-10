import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import router from "./routes/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster position="top-center" richColors />
    <RouterProvider router={router} />
  </React.StrictMode>
);
