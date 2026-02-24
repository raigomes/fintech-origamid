import React from "react";
import SalesList from "../features/SalesList";
import { useVendas } from "../context/VendasContext";

const Sales = () => {
  const { setPage, loading, error } = useVendas();

  React.useEffect(() => setPage("Vendas"));

  if (error) return <p>Erro: {error}</p>;
  if (loading) return <p>Carregando...</p>;

  return <SalesList />;
};

export default Sales;
