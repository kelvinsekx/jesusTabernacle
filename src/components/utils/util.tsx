export const random = <T extends { length: number }>(item: T) =>
  Math.floor(Math.random() * item.length);

export function getSrcSets(constraints: string) {
  const meters = [256, 512, 768, 1024, 1280];
  constraints = constraints + " ";
  let newconstraints = constraints.repeat(5).trim().split(" ");

  newconstraints = newconstraints.map((constraint, index) => {
    constraint = constraint.replace(/w_auto/i, "w_" + meters[index]);
    return constraint + " " + meters[index] + "w";
  });

  return newconstraints.join(", ");
}

export function convertDateString(dateString: string): string[] {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long", // Full day name (e.g., Monday)
    month: "long", // Full month name (e.g., August)
    day: "numeric", // Day of the month (e.g., 31)
    hour: "numeric", // Hour in 12-hour format (e.g., 8)
    minute: "numeric", // Minutes (e.g., 00)
    hour12: true, // Use 12-hour clock with AM/PM
  };

  const formattedDate = date.toLocaleString("en-US", options);

  // Extract day, month, and time from the formatted date
  const [day, month, time] = formattedDate.split(", ");

  return [day, month, time];
}
