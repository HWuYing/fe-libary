export const hash = () => {
  let count = -1;
  return () => {
    count += 1;
    return count;
  };
};
