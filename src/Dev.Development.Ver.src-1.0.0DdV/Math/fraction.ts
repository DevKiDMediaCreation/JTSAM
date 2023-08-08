import { MathApplicationFractionType } from "../main.ts";

/**
 * Fraction.
 * @param numerator The number above
 * @param denominator The number under
 * @param Calculate Should the result as a number or calculate
 */
export class Fraction {
  numerator: number;
  denominator: number;
  calculate: boolean;
  result: string;

  constructor(numerator: number, denominator: number, calculate: boolean) {
    this.numerator = numerator;
    this.denominator = denominator;
    this.calculate = calculate;
    this.result = "";
  }

  toString(): MathApplicationFractionType {
    if (!this.calculate) {
      this.result = `${this.numerator}/${this.denominator}`;
    } else {
      this.result = (this.numerator / this.denominator).toString();
    }

    return {
      output: this.result,
      operation: "fraction",
      n: [this.numerator, this.denominator],
      extern: [this.calculate.toString()],
    };
  }
}
