/**
 *
 * @param n The number of iterations to approximate PI.
 * @returns The approximation of PI.
 */
export function PI(n: number): number {
  let result = 0;
  for (let i = 0; i < n; i++) {
    const denominator = 2 * i + 1;
    if (i % 2 === 0) {
      result += 1 / denominator;
    } else {
      result -= 1 / denominator;
    }
  }
  return 4 * result;
}
