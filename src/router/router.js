import MaterialCost from "../pages/MaterialCost";
import ProductCost from "../pages/ProductCost";
import { Breadcrumb, Layout, Menu } from "antd";
import { createBrowserRouter, Navigate, Outlet, Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const CostRoot = () => {
  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item>
            <Link to={`/cost/meterial`}>Meterial Cost</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={`/cost/product`}>product Cost</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Outlet></Outlet>
      </Content>
    </Layout>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/cost/meterial" replace />,
  },
  {
    path: "/cost",
    element: <CostRoot />,
    children: [
      {
        path: "/cost/meterial",
        element: <MaterialCost />,
      },
      {
        path: "/cost/product",
        element: <ProductCost />,
      },
    ],
  },
]);
