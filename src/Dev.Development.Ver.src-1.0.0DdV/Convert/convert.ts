import { basename } from "https://deno.land/std@0.196.0/path/win32.ts";
import {
  MathApplicationBasisMathStartType,
  MathApplicationBasisMathType,
  MathApplicationBasisType,
  MathApplicationDimStartRoot,
  MathApplicationFractionStartType,
  MathGeometrixs2DStartType,
} from "../main.ts";

/**
 * Convert std numbers to JAIS types.
 * @param n n
 * @returns Convert it to a Math Application Basis Type
 */
export function cmabt(n: number): MathApplicationBasisType {
  return { output: n, operation: "cmabt", n: n };
}

/**
 * Convert std numbers to JAIS types.
 * @param n n
 * @returns Convert it to a Math Application Basis Math Type
 */
export function cmabmt(n: number): MathApplicationBasisMathType {
  return { output: n, operation: "cmabmt", n: [n] };
}

/**
 * Convert std numbers to JAIS types.
 * @param n n
 * @returns Convert it to a Math Application Fraction Type
 */
export function caft(
  numerator: number,
  denominator: number
): MathApplicationFractionStartType {
  return {
    numerator: numerator,
    denominator: denominator,
  };
}

/**
 * Convert std numbers to JAIS types.
 * @param n n
 * @returns Convert it to a Math Application Basis Start Type
 */
export function convst(n: number): MathApplicationBasisMathStartType {
  return { n: n };
}

/**
 * Convert a Type for GEO
 * @param width
 * @param height
 * @returns The geo type in 2D
 */
export function congeo(
  width: number,
  height: number
): MathGeometrixs2DStartType {
  return { width: width, height: height };
}

export function condimrt(n: number, root: number): MathApplicationDimStartRoot {
  return { n: n, root: root };
}
