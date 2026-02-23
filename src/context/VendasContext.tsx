import React, { useContext } from "react";
import useFetch from "../hooks/useFetch";
import { getISODate } from "../utils/date";

interface IContext {
  dataInicio: string;
  dataFim: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFim: React.Dispatch<React.SetStateAction<string>>;
  vendas: Venda[] | null;
  loading: boolean;
  error: string | null;
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
  const [inicio, setInicio] = React.useState<string>(
    getISODate(Date.now(), 14),
  );
  const [fim, setFim] = React.useState<string>(getISODate(Date.now()));

  const {
    data: vendas,
    loading,
    error,
  } = useFetch<Venda[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${fim}`,
  );

  return (
    <VendasContext.Provider
      value={{
        dataInicio: inicio,
        dataFim: fim,
        setInicio,
        setFim,
        vendas,
        loading,
        error,
      }}
    >
      {children}
    </VendasContext.Provider>
  );
};
