import React, { useContext } from "react";
import useFetch from "../hooks/useFetch";
import { getISODate } from "../utils/date";

interface IContext {
  dataInicio: string;
  dataFim: string;
  setInicio: React.Dispatch<React.SetStateAction<string | null>>;
  setFim: React.Dispatch<React.SetStateAction<string | null>>;
  vendas: Venda[] | null;
}

interface Venda {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "pix" | "cartao" | "boleto";
  parcelas: number | null;
  data: string;
}

const VendasContext = React.createContext<IContext | null>(null);

export const useVendas = () => {
  const context = useContext(VendasContext);
  if (!context) {
    throw new Error("useVendas deve ser usado dentro de um provider");
  }
  return context;
};

export const VendasProvider = ({ children }: React.PropsWithChildren) => {
  const [inicio, setInicio] = React.useState<string | null>(null);
  const [fim, setFim] = React.useState<string | null>(null);
  const [vendas, setVendas] = React.useState<Venda[] | null>(null);

  React.useEffect(() => {
    setInicio(getISODate(Date.now(), 14));
    setFim(getISODate(Date.now()));
  }, []);

  React.useEffect(() => {
    const { data, loading, error } = useFetch<Venda[]>(
      `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${fim}`,
    );

    setVendas(data);
  }, [inicio, fim]);

  if (!inicio || !fim) return null;

  return (
    <VendasContext.Provider
      value={{
        dataInicio: inicio,
        dataFim: fim,
        setInicio,
        setFim,
        vendas,
      }}
    >
      {children}
    </VendasContext.Provider>
  );
};
