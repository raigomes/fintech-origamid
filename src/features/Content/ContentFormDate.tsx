import React from "react";
import Input from "../../components/Input";
import { useVendas } from "../../context/VendasContext";

const ContentFormDate = () => {
  const { dataInicio, dataFim, setFim, setInicio } = useVendas();

  return (
    <form className="box flex">
      <Input
        label="Início"
        id="inicio"
        value={dataInicio}
        onChange={(e) => setInicio(e.target.value)}
      />
      <Input
        label="Final"
        id="fim"
        value={dataFim}
        onChange={(e) => setFim(e.target.value)}
      />
    </form>
  );
};

export default ContentFormDate;
