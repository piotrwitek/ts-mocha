
import dateformat from "dateformat";

export default function () {
  const date: Date = new Date('2022-06-06');
  const formattedDate: string = dateformat(date, "yyyy-mm-dd");
  return formattedDate;
}
