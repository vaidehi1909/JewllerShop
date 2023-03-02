import React from "react";
import { Skeleton, Card, Row, Col } from "antd";

const Loader = () => {
  return (
    <>
      <Row gutter={16}>
        {Array.from({
          length: 12,
        }).map((_, i) => {
          return (
            <Col key={i} lg={6} md={8} sm={12} xs={12} xl={4}>
              <Card className="antd-card-margin antd-card-height ">
                <div>
                  <Skeleton />
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Loader;
