declare global {
  type PageTitle =
    | "Resumo"
    | "Vendas"
    | "Webhooks"
    | "Configurações"
    | "Contato"
    | "Sair";

  interface Venda {
    id: string;
    nome: string;
    preco: number;
    status: "pago" | "processando" | "falha";
    pagamento: "pix" | "cartao" | "boleto";
    parcelas: number | null;
    data: string;
  }
}

export {};
