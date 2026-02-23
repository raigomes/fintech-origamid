const millisecondsPerDay = 1000 * 60 * 60 * 24;

export function getISODate(
  dateInMiliseconds: number,
  subtractDays: number = 0,
) {
  const newDateInMilliseconds =
    dateInMiliseconds - subtractDays * millisecondsPerDay;
  return new Date(newDateInMilliseconds).toISOString().split("T")[0];
}
