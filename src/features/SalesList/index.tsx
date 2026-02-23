import React from "react";
import SalesListItem from "./SalesListItem";

const SalesList = () => {
  const array = Array.from({ length: 20 });

  return (
    <ul>
      {array.map((item, index) => (
        <li key={index}>
          <SalesListItem
            id="01H3YYPNGC8BCXME7Q4KZ0NV20"
            clientName="Carolina"
            price={932}
          />
        </li>
      ))}
    </ul>
  );
};

export default SalesList;
