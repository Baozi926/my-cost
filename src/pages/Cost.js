import React, { useEffect, useState } from "react";
import { Table, Button, Input, InputNumber, DatePicker } from "antd";
import "./Cost.scss";

import { v4 as uuidv4 } from "uuid";
import { getTable } from "../services/dbService";

const COST_LIST = "cost-list";

const ID_FIELD = "id";

const store = getTable(COST_LIST, {
  idField: ID_FIELD,
});

const Cost = () => {
  const getColRenerer = (field, Component = Input) => {
    return (param) => {
      return (
        <Component
          value={param[field]}
          style={{ width: "100%" }}
          onChange={(evt, value) => {
            console.log("change", evt, value);
            let val = isNaN(evt) ? evt.target.value : evt;
            if (value) {
              val = value;
            }

            const index = list.findIndex((v) => {
              return v[ID_FIELD] === param[ID_FIELD];
            });

            if (index > -1) {
              list[index][field] = val;

              const newList = [...list];

              setList(newList);

              return store.update(param[ID_FIELD], list[index]);
            }
          }}
        ></Component>
      );
    };
  };

  const columns = [
    {
      title: "name",
      render: getColRenerer("name"),
    },
    // {
    //   title: "type",
    //   render: getColRenerer("type"),
    // },
    {
      title: "cost",
      render: getColRenerer("cost", InputNumber),
    },
    {
      title: "number",
      render: getColRenerer("number", InputNumber),
    },
    // {
    //   title: "date",
    //   render: getColRenerer("date", DatePicker),
    // },
    {
      title: "marks",
      render: getColRenerer("marks"),
    },
    {
      title: "Action",
      render: (param) => (
        <a
          onClick={() => {
            deleteItem(param);
          }}
        >
          Delete
        </a>
      ),
    },
  ];

  const deleteItem = (param) => {
    if (!param) {
      return;
    }
    const id = param[ID_FIELD];
    store.removeById(param[ID_FIELD]);
    setList(
      list.filter((v) => {
        return v && v[ID_FIELD] !== id;
      })
    );
  };

  const [list, setList] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    store.getAll().then((val) => {
      setList(val || []);
      console.log("cost data", val);
      setLoaded(true);
    });

    return () => {
      if (loaded) {
        store.updateAll(list);
      }
    };
  }, []);

  const addItem = () => {
    const newItem = {
      [ID_FIELD]: uuidv4(),
      name: "---",
      // type: "材料",
      cost: 0,
      marks: "",
    };

    const newList = [newItem, ...list];

    setList(newList);

    store.add(newItem);
  };

  return (
    <div className="cost page">
      <div className="header">
        <Button
          type="primary"
          onClick={() => {
            addItem();
          }}
          block
        >
          +
        </Button>
      </div>
      <Table dataSource={list} rowKey="id" columns={columns} />;
    </div>
  );
};

export default Cost;
