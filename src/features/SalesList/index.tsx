import React from "react";
import SalesListItem from "./SalesListItem";
import { useVendas } from "../../context/VendasContext";

const SalesList = () => {
  const { vendas } = useVendas();

  if (!vendas) return null;

  return (
    <ul>
      {vendas.map((item, index) => (
        <li key={index}>
          <SalesListItem
            id={item.id}
            clientName={item.nome}
            price={item.preco}
          />
        </li>
      ))}
    </ul>
  );
};

export default SalesList;
