import React from "react";
import Box from "./Box";

const SalesSummary = () => {
  return (
    <div className="resumo flex mb">
      <Box title="Vendas" value={62816} />
      <Box title="Recebido" value={53072} />
      <Box title="Processando" value={9744} />
    </div>
  );
};

export default SalesSummary;
