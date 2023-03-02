import React from "react";
import "antd/dist/reset.css";
import "./App.css";
import AppLayout from "./components/AppLayout";
import { ConfigProvider } from "antd";

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#832729",
        },
      }}
    >
      <AppLayout />
    </ConfigProvider>
  );
};

export default App;
