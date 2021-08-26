export const formatDate = (date) => {
  const d = new Date(date);
  const [day, month, year] = [
    d.getDate(),
    d.toLocaleString('default', { month: 'long' }),
    d.getFullYear(),
  ];
  return `${month} ${day}, ${year}`;
};