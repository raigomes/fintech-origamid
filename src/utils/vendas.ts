import { getDayAndMonth } from "./date";

export function countTotalByStatus(status: StatusVenda[], vendas: Venda[]) {
  let total = 0;

  status.forEach((status) => {
    total += vendas.reduce((acc, item) => {
      return acc + (item.status === status ? item.preco : 0);
    }, 0);
  });

  return total;
}

type AggregatedByDate = Record<string, ICountVenda>;

export function countTotalByDateAndStatus(vendas: Venda[]) {
  const aggregated = vendas.reduce<AggregatedByDate>((acc, venda) => {
    const dateKey = getDayAndMonth(new Date(venda.data));

    acc[dateKey] ??= {
      date: dateKey,
      pago: 0,
      processando: 0,
      falha: 0,
    };

    acc[dateKey][venda.status] += venda.preco;

    return acc;
  }, {});

  return Object.values(aggregated);
}
