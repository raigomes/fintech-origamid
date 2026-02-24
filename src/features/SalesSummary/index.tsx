import React from "react";
import Box from "./Box";
import { useVendas } from "../../context/VendasContext";
import { countTotalByStatus } from "../../utils/vendas";

const SalesSummary = () => {
  const [totalVendas, setTotalVendas] = React.useState(0);
  const [totalRecebido, setTotalRecebido] = React.useState(0);
  const [totalProcessando, setTotalProcessando] = React.useState(0);
  const { vendas } = useVendas();

  React.useEffect(() => {
    if (vendas) {
      setTotalVendas(countTotalByStatus(["pago", "processando"], vendas));
      setTotalRecebido(countTotalByStatus(["pago"], vendas));
      setTotalProcessando(countTotalByStatus(["processando"], vendas));
    }
  }, [vendas]);

  return (
    <div className="resumo flex mb">
      <Box title="Vendas" value={totalVendas} />
      <Box title="Recebido" value={totalRecebido} />
      <Box title="Processando" value={totalProcessando} />
    </div>
  );
};

export default SalesSummary;
