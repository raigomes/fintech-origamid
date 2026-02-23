import React from "react";
import { NavLink } from "react-router-dom";

interface ISales {
  id: string;
  clientName: string;
  price: number;
}

const SalesListItem = ({ id, clientName, price }: ISales) => {
  return (
    <div className="venda box">
      <NavLink to={`/vendas/${id}`} style={{ fontFamily: "monospace" }}>
        {id}
      </NavLink>
      <div>{clientName}</div>
      <div>
        {price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

export default SalesListItem;
