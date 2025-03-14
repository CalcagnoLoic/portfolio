export const handleSelectionLogic = (selected: string[], value: string) => {
  if (selected.includes("all") && value !== "all") {
    return [value];
  }

  if (selected.includes(value)) {
    const newSelected = selected.filter((item) => item !== value);
    return newSelected.length === 0 ? ["all"] : newSelected;
  } else {
    return [...selected, value];
  }
};
