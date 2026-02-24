import React from "react";
import SalesDescription from "../features/SalesDescription";
import { useVendas } from "../context/VendasContext";
import Loading from "../components/Loading";

const SalesItem = () => {
  const { setPage, loading, error } = useVendas();

  React.useEffect(() => setPage("Vendas"));

  if (error) return <p>Erro: {error}</p>;
  if (loading) return <Loading />;

  return <SalesDescription />;
};

export default SalesItem;
