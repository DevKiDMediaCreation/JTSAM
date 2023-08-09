/**
 * Configuaration of the Pack
 * Settings:
 * * Debug: off
 */
export class configuration {
  debug: boolean;
  testing: boolean;

  constructor(debug: boolean, testing: boolean) {
    this.debug = debug;
    this.testing = testing;
  }
}

import { condimrt, congeo, convst } from "./Convert/convert.ts";
import { equalation } from "./Core/calculate.ts";
import { factorial } from "./Math/factorial.ts";
import { Fraction } from "./Math/fraction.ts";
import {
  get_area,
  get_diagonal,
  get_perimeter,
} from "./Math/geometry/cdiago.ts";
import { droot } from "./Math/sqrt/droot.ts";
import { sqroot, bsmsqrt } from "./Math/sqrt/sqrt.ts";
import { PI } from "./const/PI.ts";
import { derientale, ip } from "./const/constant.ts";
/**
 * A type that represents the math function or the number
 */
export type MathApplicationBasisType = {
  output: number;
  operation: string;
  n: number;
};

/**
 * A type that represents the math function that have more than 1 inputs
 */
export type MathApplicationFractionType = {
  output: string;
  operation: string;
  n: number[]; // or Array<number> if you prefer
  extern: string[]; // or Array<number> if you prefer
};

export type MathApplicationFractionStartType = {
  numerator: number; // or Array<number> if you prefer
  denominator: number; // or Array<number> if you prefer
};

/**
 * A type for Basis Math
 */
export type MathApplicationBasisMathType = {
  output: number;
  operation: string;
  n: number[]; // or Array<number> if you prefer
};

/**
 * A type to create a type to convert it in all other type.
 */
export type MathApplicationBasisMathStartType = {
  n: number;
};

/**
 * A type to create a type to convert it in all other type.
 */
export type MathApplicationExpoType = {
  output: number;
  operation: string;
  base: number;
  exponent: number;
};

/**
 * A type to create a type to convert it in all other type.
 */
export type MathGeometrixs2DStartType = {
  height: number;
  width: number;
};

/**
 * A type to calculate all DIMENSION
 */
export type MathApplicationDimRoot = {
  output: number;
  operation: string;
  n: number;
  root: number;
};

export type MathApplicationDimStartRoot = {
  n: number;
  root: number;
};

console.log(bsmsqrt(convst(5)));
console.log(sqroot(convst(5)));
console.log(factorial(convst(5)));
const fraction = new Fraction(10, 3, true); //! Fraction muss accept MAFMST Math Application Fraction Math Start Type
console.log(fraction.toString());

const equal = new equalation(["d"], "4 + 5 + 1"); //! NOT DONE. Correct UNDEFINED
console.log(equal.run());

console.log(droot(condimrt(25, 5)));
console.log(droot(condimrt(16, 4)));
console.log(PI(232342423)); //! Perfect n is 325100
console.log(derientale);
console.log(ip);
console.log(Math.PI);

console.log(get_area(congeo(10, 20)));
console.log(get_diagonal(congeo(10, 20)));
console.log(get_perimeter(congeo(10, 20)));
/*  */
