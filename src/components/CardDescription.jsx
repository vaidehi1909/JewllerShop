import React from "react";

const CardDescription = ({ content }) => {
  return (
    <span className="card-desc-color">
      {Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      }).format(content.price)}
      <br />
      {content["categories"].join(" | ")}
    </span>
  );
};

export default CardDescription;
