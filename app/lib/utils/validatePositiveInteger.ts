export const validatePositiveInteger = (value: string): boolean => {
  return /^\d*$/.test(value.trim());
};
