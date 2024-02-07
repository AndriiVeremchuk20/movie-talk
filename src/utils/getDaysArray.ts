export const getDaysArray = (numDays: number) => {
  const arr: number[] = [];

  for (let i = 0; i < numDays; i++) {
    arr.push(i);
  }

  return arr;
};
