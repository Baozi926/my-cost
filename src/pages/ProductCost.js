import React, { useEffect, useState } from "react";
import { Button, List, Input } from "antd";
import "./ProductCost.scss";
import { getTable } from "../services/dbService";

import { v4 as uuidv4 } from "uuid";

const productStore = getTable("product", { idField: "id" });

export default () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    productStore.getAll().then((res) => {
      setProductList(res || []);
    });
  }, []);

  const addProduct = () => {
    const product = {
      name: "",
      id: uuidv4(),
    };

    productStore.add(product).then(() => {
      const list = [product, ...productList];
      setProductList(list);
    });
  };

  return (
    <div className="sub-page product-cost">
      <div className="left">
        <List
          style={{ height: "100%" }}
          header={
            <div className="row">
              <div className="main">Product</div>{" "}
              <div className="right">
                <Button
                  type="primary"
                  onClick={() => {
                    addProduct();
                  }}
                  shape="circle"
                >
                  +
                </Button>
              </div>{" "}
            </div>
          }
          bordered
          dataSource={productList}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <Input
                value={item.name}
                onChange={(res) => {
                  const val = res.target.value;

                  

                }}
              ></Input>
            </List.Item>
          )}
        />
      </div>
      <div className="main"></div>
    </div>
  );
};
