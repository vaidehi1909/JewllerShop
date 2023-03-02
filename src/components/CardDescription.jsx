import React from "react";

const CardDescription = ({ content }) => {
  return (
    <span className="card-desc-color">
      {Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(content.price)}
      <br />
      {content["categories"].join(" | ")}
    </span>
  );
};

export default CardDescription;
