/**
 * !! This file is not contributed to use.
 * !! Anyone there use this file and code before ending of building this code can be go in the prison
 * !! because using of not using code in the LICENSE.
 * !! ONLY DEVS FROM THE PROJECT CAN CHANGE AND MODIFY THE CODE.
 * !! Duy Nam, Schlitz; Sinus, Aeth
 */

import { MathApplicationBasisMathType } from "../../main.ts";
import { pow, abs } from "../basis/math.ts";

class configurationCbrt {
  debug: boolean;
  testing: boolean;

  constructor(debug: boolean, testing: boolean) {
    this.debug = debug;
    this.testing = testing;
  }
}

export const configCBRT: configurationCbrt = new configurationCbrt(
  false,
  false
);

/**
 *
 * @param number The number calculate in CBRT.
 * @param initialGuess
 * @returns
 */
function cbrt(
  number: number,
  initialGuess: number = 1
): MathApplicationBasisMathType {
  let guess = initialGuess;
  let error = 1e-15; // desired level of accuracy

  while (abs(pow(guess, 3).output - number).output > error) {
    guess = (number / pow(guess, 2).output + 2 * guess) / 3;
    if (configCBRT.testing) {
      console.log(
        guess,
        number,
        initialGuess,
        error,
        abs(pow(guess, 3).output - number).output
      );
    }
  }

  return { output: guess, operation: "cbrt", n: [number, initialGuess] };
}

configCBRT.testing = true;
const number = 9;
console.log(cbrt(number)); // 3
