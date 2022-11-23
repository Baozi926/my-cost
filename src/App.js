import React from "react";
import { Breadcrumb, Layout, Menu } from "antd";

import { RouterProvider, Route } from "react-router-dom";
import "./App.scss";
import { router } from "./router/router";

const { Header, Content, Footer } = Layout;

const App = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={new Array(3).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </Header>
    <Content style={{ padding: "0 50px" }}>
      {/* <div className="site-layout-content"> */}
        <RouterProvider router={router} />
      {/* </div> */}
    </Content>
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);

export default App;
