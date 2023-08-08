import {
  MathApplicationBasisMathType,
  MathGeometrixs2DStartType,
} from "../../main.ts";

export function get_area(
  param: MathGeometrixs2DStartType
): MathApplicationBasisMathType {
  return {
    output: param.height * param.width,
    operation: "garea",
    n: [param.height, param.width],
  };
}

export function get_perimeter(
  param: MathGeometrixs2DStartType
): MathApplicationBasisMathType {
  return {
    output: 2 * param.height + 2 * param.width,
    operation: "gperi",
    n: [param.height, param.width],
  };
}

export function get_diagonal(
  param: MathGeometrixs2DStartType
): MathApplicationBasisMathType {
  return {
    output: (param.width ** 2 + param.height ** 2) ** 0.5,
    operation: "gdiag",
    n: [param.height, param.width],
  };
}
