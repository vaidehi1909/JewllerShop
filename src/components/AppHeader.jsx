import React, { useState } from "react";
import { Layout, Select, Row, Col } from "antd";
import { DownOutlined } from "@ant-design/icons";
const { Header } = Layout;

const options = [
  {
    label: "Men",
    value: "Men",
  },
  {
    label: "Women",
    value: "Women",
  },
];
const items = [
  {
    label: "Low To High",
    value: "asc",
  },
  {
    label: "High To Low",
    value: "desc",
  },
];

const AppHeader = ({ setFilters, setSorts }) => {
  const [checkedList, setCheckedList] = useState([]);

  const onChangeSort = (value) => {
    setSorts(value);
    const newSort = value ? { price: value } : {};
    setSorts(newSort);
  };

  const onChange = (value) => {
    setCheckedList(value);

    const newFilter = value.length > 0 ? { categories: value } : {};
    setFilters(newFilter);
  };

  return (
    <Header className="antd-header-fix">
      <Row>
        <Col xl={12} sm={24} xs={24}>
          <h1>Shine Jewellers</h1>
        </Col>
        <Col xl={6} sm={12} xs={12}>
          <Select
            mode="tags"
            className="antd-select-fullwidth"
            placeholder=" Filter By Categories"
            onChange={onChange}
            allowClear
            options={options}
          />
        </Col>
        <Col xl={6} sm={12} xs={12}>
          <Select
            className="antd-select-fullwidth"
            placeholder="Price Sort By"
            onChange={onChangeSort}
            allowClear
            options={items}
          />
        </Col>
      </Row>
    </Header>
  );
};
export default AppHeader;
