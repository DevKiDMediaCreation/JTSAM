import {
  MathApplicationBasisMathStartType,
  MathApplicationBasisType,
} from "../main.ts";

class configurationFractorial {
  debug: boolean;
  testing: boolean;

  constructor(debug: boolean, testing: boolean) {
    this.debug = debug;
    this.testing = testing;
  }
}

export const configFractorial: configurationFractorial =
  new configurationFractorial(false, false);

/**
 * Fractorial is a function that multiplies itself by n
 * @param n A number above 0
 * @returns n ** n
 */
export function factorial(
  n: MathApplicationBasisMathStartType
): MathApplicationBasisType {
  if (n.n < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
  }

  let result = 1;
  for (let i = 1; i <= n.n; i++) {
    result *= n.n;
    if (configFractorial.testing) {
      console.log(result, n, i);
    }
  }
  return { output: result, operation: "fract", n: n.n };
}
