/**
 * Get n evenly spaced numbers in a range.
 * @param n Number of numbers to generate.
 * @param min Lower limit of range.
 * @param max Upper limit of range.
 */
export function uniform(n: number, min = 0, max = 1): number[] {
  const res = new Array(n);
  let i = 0;
  const increment = (max - min) / (n - 1);
  while (i < (n)) {
    res[i] = min + i * increment;
    i += 1;
  }
  return res;
}
export function calculateIncrement(n: number, min = 0, max = 1): number {
  return (max - min) / (n - 1);
}