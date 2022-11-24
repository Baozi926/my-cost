import React from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import { ConfigProvider } from "antd";

import { RouterProvider, Route, useNavigate } from "react-router-dom";
import "./App.scss";
import { router } from "./router/router";

import "dayjs/locale/zh-cn";
import locale from "antd/locale/zh_CN";

const { Header, Content, Footer } = Layout;

const App = () => {
  // const navigate = useNavigate();
  return (
    <ConfigProvider locale={locale}>
         <RouterProvider router={router} />
    </ConfigProvider>
  );
};

export default App;
