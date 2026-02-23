import React from "react";
import SalesSummary from "../features/SalesSummary";
import SalesGraph from "../features/SalesGraph";
import { useVendas } from "../context/VendasContext";

const Summary = () => {
  const { loading, error } = useVendas();

  if (error) return <p>Erro: {error}</p>;
  if (loading) return <p>Carregando...</p>;

  return (
    <>
      <SalesSummary />
      <SalesGraph />
    </>
  );
};

export default Summary;
