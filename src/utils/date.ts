const millisecondsPerDay = 1000 * 60 * 60 * 24;

export function getISODate(
  dateInMiliseconds: number,
  subtractDays: number = 0,
) {
  const newDateInMilliseconds =
    dateInMiliseconds - subtractDays * millisecondsPerDay;
  return new Date(newDateInMilliseconds).toISOString().split("T")[0];
}

function getFullMonth(date: Date) {
  const nomeMes = date.toLocaleString("pt-BR", { month: "long" });
  return nomeMes;
}

export function getLastFourMonths(isoDate: string) {
  const date = new Date(isoDate);
  const month = date.getMonth();
  const array = [];

  for (let i = month - 3; i <= month; i++) {
    const newDate = new Date(date.getTime());
    newDate.setMonth(i);
    array.push({
      fullMonth: getFullMonth(newDate),
      date: newDate,
    });
  }

  return array;
}

export function getFirstAndLastDayOfMonth(date: Date) {
  const firstDay = getISODate(
    new Date(date.getFullYear(), date.getMonth(), 1).getTime(),
  );
  const lastDay = getISODate(
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getTime(),
  );

  return { firstDay, lastDay };
}
