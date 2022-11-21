import React from "react";
import { Table, Button } from "antd";
import "./Cost.scss";

const dataSource = [
  {
    key: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
];

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Action",
    render: () => <a>Delete</a>,
  },
];

const Cost = () => {
  return (
    <div className="cost page">
      <div className="header">
        <Button type="primary" block>
          Add
        </Button>
      </div>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};

export default Cost;
