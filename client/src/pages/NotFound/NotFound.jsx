import React from "react";

import notFoundImage from "./notFound.png";

export const NotFound = () => {
  return (
    <div>
      <img
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "50%",
          height: "500px",
        }}
        src={notFoundImage}
        alt="pic"
      />
    </div>
  );
};
