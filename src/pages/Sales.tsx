import React from "react";
import SalesList from "../features/SalesList";
import { useVendas } from "../context/VendasContext";
import Loading from "../components/Loading";
import Head from "../components/Head";

const Sales = () => {
  const { setPage, loading, error } = useVendas();

  React.useEffect(() => setPage("Vendas"));

  if (error) return <p>Erro: {error}</p>;
  if (loading) return <Loading />;

  return (
    <>
      <Head
        title="Fintech | Vendas"
        description="Lista das vendas da Fintech"
      />
      <SalesList />
    </>
  );
};

export default Sales;
