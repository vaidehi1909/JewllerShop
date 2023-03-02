import React from "react";
import { Card } from "antd";
import CardDescription from "./CardDescription";
const { Meta } = Card;

const CardView = ({ content }) => {
  return (
    <Card
      hoverable
      className="antd-card-margin"
      cover={<img alt="NA" src={content.image_url} />}
    >
      <Meta
        title={content.title}
        description={<CardDescription content={content} />}
      />
    </Card>
  );
};

export default CardView;
