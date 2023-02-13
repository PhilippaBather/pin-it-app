/**
 * Returns a date one working week greater than the current date.
 * @returns date DD/MM/YY
 */
export const getDateOneWeek = () => {
  let date = new Date();
  const incr = date.getDay() + 5 === 0 ? 6 : date.getDay() + 5 === 6 ? 7 : 5;
  date.setDate(date.getDate() + incr);
  return date.toLocaleDateString();
};
