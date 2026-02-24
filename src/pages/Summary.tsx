import React from "react";
import SalesSummary from "../features/SalesSummary";
import SalesGraph from "../features/SalesGraph";
import { useVendas } from "../context/VendasContext";
import Loading from "../components/Loading";

const Summary = () => {
  const { setPage, loading, error } = useVendas();

  React.useEffect(() => setPage("Resumo"));

  if (error) return <p>Erro: {error}</p>;
  if (loading) return <Loading />;

  return (
    <>
      <SalesSummary />
      <SalesGraph />
    </>
  );
};

export default Summary;
