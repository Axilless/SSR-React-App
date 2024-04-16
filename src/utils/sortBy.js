export const sortBy = (field, order) => (a, b) => {
  const isDescSorting = order === "desc";
  const valueA = a[field];
  const valueB = b[field];

  if (valueA < valueB) {
    return isDescSorting ? 1 : -1;
  }
  if (valueA > valueB) {
    return isDescSorting ? -1 : 1;
  }
  return 0;
};
