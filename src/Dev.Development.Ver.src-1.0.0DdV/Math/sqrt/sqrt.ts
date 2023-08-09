import {
  MathApplicationBasisMathStartType,
  MathApplicationBasisType,
} from "../../main.ts";

class configurationSqrt {
  debug: boolean;
  testing: boolean;

  constructor(debug: boolean, testing: boolean) {
    this.debug = debug;
    this.testing = testing;
  }
}

export const configSQRT: configurationSqrt = new configurationSqrt(
  false,
  false
);

/**
 * This function calculate the sqrt with the Babylonian method
 * @param num The number that return as output
 * @returns A number from -\inf.[0-9] to \inf.[0-9]
 * ! 7 can't function
 */
/*
export function sqroot(num: number): MathApplicationBasisType {
  if (num < 2) return { output: num, operation: "sqrt", n: num };
  let x = num;
  let y = 1;
  while (x > y) {
    x = (x + y) / 2;
    y = num / x;
    if (configSQRT.testing) {
      console.log(x, y);
    }
  }
  return { output: x, operation: "sqrt", n: num };
}*/

/**
 * It use a small treshold to calculate the sqrt with the Babylonian method.
 * @param num Number that return as output
 * @returns A number from -\inf.[0-9] to \inf.[0-9]
 */
export function sqroot(
  num: MathApplicationBasisMathStartType
): MathApplicationBasisType {
  if (num.n < 2) return { output: num.n, operation: "sqrt", n: num.n };
  let x: number = num.n;
  let y: number = 1;
  const threshold = 1e-10; // Set a small threshold for convergence
  while (x - y > threshold) {
    x = (x + y) / 2;
    y = num.n / x;
    if (configSQRT.testing) {
      console.log(x, y);
    }
  }
  return { output: x, operation: "sqrt", n: num.n };
}

/**
 * This function calculate the sqrt in the binary search method
 * @param num The number that return as output
 * @returns A number from -\inf to \inf as int
 * ! Note: The ouput is always a int. If the number is 12.43 or 12.98 is end always as 12. All after the point will show.
 */
export function bsmsqrt(
  num: MathApplicationBasisMathStartType
): MathApplicationBasisType {
  if (num.n <= 3 && num.n != 0) {
    console.log(
      "%c" +
        "With the binary search method you get only from -\\inf to 3 always a 1 or a 0",
      "color: red;font-weight:bold;"
    );
    Deno.exit(1);
  }

  if (num.n === 0 || num.n === 1)
    return { output: num.n, operation: "bsmsqrt", n: num.n };
  let start: number = 1;
  let end: number = num.n;
  let ans: number;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (mid * mid === num.n) {
      return { output: mid, operation: "bsmsqrt", n: num.n };
    }
    if (mid * mid < num.n) {
      start = mid + 1;
      ans = mid;
    } else {
      end = mid - 1;
    }

    /**
     * if (mid * mid < num.n) {
     *   if ((mid + 1) * (mid + 1) > num.n) {
     *     start = mid + 1;
     *     ans = mid;
     *   } else {
     *     start = mid + 1;
     *   }
     * } else {
     *   end = mid - 1;
     * }
     */

    if (configSQRT.testing) {
      console.log(end, start);
    }
  }
  return { output: ans!, operation: "bsmsqrt", n: num.n };
}
