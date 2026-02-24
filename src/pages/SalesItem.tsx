import React from "react";
import SalesDescription from "../features/SalesDescription";
import { useVendas } from "../context/VendasContext";
import Loading from "../components/Loading";
import Head from "../components/Head";

const SalesItem = () => {
  const { setPage, loading, error } = useVendas();

  React.useEffect(() => setPage("Vendas"));

  if (error) return <p>Erro: {error}</p>;
  if (loading) return <Loading />;

  return (
    <>
      <Head
        title="Fintech | Descrição da Venda"
        description="Descrição da vendas da Fintech"
      />
      <SalesDescription />
    </>
  );
};

export default SalesItem;
