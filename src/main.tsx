import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
import { ConfigProvider } from "antd";
import { customTheme } from "./config/themeConfig.ts";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ConfigProvider theme={customTheme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Toaster position="top-center" richColors />
            <RouterProvider router={router} />
          </PersistGate>
        </Provider>
      </ConfigProvider>
    </HelmetProvider>
  </React.StrictMode>
);
