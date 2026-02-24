declare global {
  type PageTitle =
    | "Resumo"
    | "Vendas"
    | "Webhooks"
    | "Configurações"
    | "Contato"
    | "Sair";

  type StatusVenda = "pago" | "processando" | "falha";

  type Payment = "pix" | "cartao" | "boleto";

  interface Venda {
    id: string;
    nome: string;
    preco: number;
    status: StatusVenda;
    pagamento: Payment;
    parcelas: number | null;
    data: string;
  }

  type TotalByStatus = { [key in StatusVenda]: number };

  type ICountVenda = TotalByStatus & {
    date: string;
  };
}

export {};
