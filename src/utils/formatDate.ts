const formatter = new Intl.DateTimeFormat("pt-BR");

export function formatDate(date: number | Date | string): string {
  if (typeof date === "string") {
    date = new Date(date);
  }

  return formatter.format(date);
}
