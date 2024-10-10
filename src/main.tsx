import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import router from "./routes/router";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Toaster position="top-center" richColors />
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
  </React.StrictMode>
);
