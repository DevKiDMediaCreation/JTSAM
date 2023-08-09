import {
  MathApplicationDimRoot,
  MathApplicationDimStartRoot,
} from "../../main.ts";

export function droot(
  prop: MathApplicationDimStartRoot
): MathApplicationDimRoot {
  return {
    output: prop.n ** (1 / prop.root),
    operation: "droot",
    n: prop.n,
    root: prop.root,
  };
}
