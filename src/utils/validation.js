export const isNotEmpty = (value) => {
  return value.trim() !== "";
};

export const validateDate = (date) => {
  if (date <= new Date()) return false;
  return true;
};
