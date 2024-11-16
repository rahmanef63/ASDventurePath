export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("id-ID").format(date);
}

export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
} 