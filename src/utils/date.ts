const millisecondsPerDay = 1000 * 60 * 60 * 24;

export function getISODate(date: Date, subtractDays: number = 0) {
  date.setDate(date.getDate() - subtractDays);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return [year, month, day].join("-");
}

function getFullMonth(date: Date) {
  const nomeMes = date.toLocaleString("pt-BR", { month: "long" });
  return nomeMes;
}

export function getLastFourMonths(date: Date) {
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
  const firstDay = getISODate(new Date(date.getFullYear(), date.getMonth(), 1));
  const lastDay = getISODate(
    new Date(date.getFullYear(), date.getMonth() + 1, 0),
  );
  return { firstDay, lastDay };
}

export function getDayAndMonth(date: Date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return [month, day].join("-");
}
