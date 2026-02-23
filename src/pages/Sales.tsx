import React from "react";
import SalesList from "../features/SalesList";
import { useVendas } from "../context/VendasContext";

const Sales = () => {
  const { loading, error } = useVendas();

  if (error) return <p>Erro: {error}</p>;
  if (loading) return <p>Carregando...</p>;

  return <SalesList />;
};

export default Sales;
