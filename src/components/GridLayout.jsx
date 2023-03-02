import React from "react";
import { Row, Col } from "antd";
import CardView from "./CardView";
import useQueryData from "../hooks/useQueryData";

const GridLayout = (props) => {
  const { data } = useQueryData(props);

  return (
    <Row>
      {data.map((d, i) => {
        return (
          <Col key={i} lg={6} md={8} sm={12} xs={12} xl={4}>
            <CardView content={d} />
          </Col>
        );
      })}
    </Row>
  );
};

export default GridLayout;
