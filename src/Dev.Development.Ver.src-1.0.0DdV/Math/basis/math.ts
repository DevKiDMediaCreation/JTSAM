import {
  MathApplicationBasisMathType,
  MathApplicationExpoType,
} from "../../main.ts";

export function expo(
  base: number,
  exponent: number
): MathApplicationBasisMathType {
  return {
    output: base ** exponent,
    operation: "expo",
    n: [base, exponent],
  };
}

export function pow(base: number, exponent: number): MathApplicationExpoType {
  if (exponent === 0)
    return { output: 1, operation: "pow", base: base, exponent: exponent };

  let result = 1;
  for (let i = 0; i < abs(exponent).output; i++) {
    result *= base;
  }

  return {
    output: exponent < 0 ? 1 / result : result,
    operation: "pow",
    base: base,
    exponent: exponent,
  };
}

/**
 * All negative to positive
 * @param n Number
 * @returns -5 to 5
 */
export function abs(n: number): MathApplicationBasisMathType {
  return { output: n < 0 ? -n : n, operation: "abs", n: [n] };
}
