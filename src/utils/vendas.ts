export function countTotalVendas(status: StatusVenda[], vendas: Venda[]) {
  let total = 0;

  status.forEach((status) => {
    total += vendas.reduce((acc, item) => {
      return acc + (item.status === status ? item.preco : 0);
    }, 0);
  });

  return total;
}
