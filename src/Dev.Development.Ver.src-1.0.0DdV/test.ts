import { convst } from "./Convert/convert.ts";
import { Fraction } from "./Math/fraction.ts";
import { configSQRT, sqroot } from "./Math/sqrt/sqrt.ts";
import {
  MathApplicationBasisType,
  MathApplicationFractionType,
} from "./main.ts";

const StartTime = Date.now();

let SuccessPointsStringTestingFraction = 0;
let SuccessPointsObjectTestingFraction = 0;
let SuccessPointsStringTestingSqrt = 0;
let SuccessPointsObjectTestingSqrt = 0;
let SuccessPointsFullScoreDone = 0;

let TimePassTest = 0;

configSQRT.testing = true;
console.log("Configuration of Sqrt:");
console.log("Debug of Sqrt:", configSQRT.debug);
console.log("Testing of Sqrt:", configSQRT.testing, "\n");

/**
 * Controll the fraction functions
 */
class FractionTesting {
  static runTests() {
    const tests: {
      numerator: number;
      denominator: number;
      calculate: boolean;
      expected: string;
    }[] = [
      { numerator: 1, denominator: 2, calculate: true, expected: "0.5" },
      { numerator: 3, denominator: 4, calculate: false, expected: "3/4" },
      { numerator: 5, denominator: 10, calculate: true, expected: "0.5" },
      { numerator: 2, denominator: 3, calculate: false, expected: "2/3" },
      { numerator: 7, denominator: 8, calculate: true, expected: "0.875" },
      { numerator: 4, denominator: 7, calculate: false, expected: "4/7" },
      { numerator: 2, denominator: 5, calculate: true, expected: "0.4" },
      { numerator: 9, denominator: 6, calculate: false, expected: "9/6" },
      { numerator: 12, denominator: 8, calculate: true, expected: "1.5" },
      { numerator: 5, denominator: 2, calculate: false, expected: "5/2" },
      {
        numerator: 13,
        denominator: 14,
        calculate: true,
        expected: "0.9285714285714286",
      },
      { numerator: 6, denominator: 5, calculate: false, expected: "6/5" },
      {
        numerator: 11,
        denominator: 9,
        calculate: true,
        expected: "1.2222222222222223",
      },
      {
        numerator: 7,
        denominator: 3,
        calculate: false,
        expected: "7/3",
      },
      { numerator: 15, denominator: 16, calculate: true, expected: "0.9375" },
      {
        numerator: 8,
        denominator: 11,
        calculate: false,
        expected: "8/11",
      },
      {
        numerator: 17,
        denominator: 18,
        calculate: true,
        expected: "0.9444444444444444",
      },
      { numerator: 9, denominator: 4, calculate: false, expected: "9/4" },
      { numerator: 19, denominator: 20, calculate: true, expected: "0.95" },
      {
        numerator: 10,
        denominator: 21,
        calculate: false,
        expected: "10/21",
      },
    ];

    for (const test of tests) {
      const { numerator, denominator, calculate, expected } = test;
      const fraction = new Fraction(numerator, denominator, calculate);
      const resultString: MathApplicationFractionType = fraction.toString();
      const resultObject: MathApplicationFractionType = {
        output: resultString.output,
        operation: "fraction",
        n: [numerator, denominator],
        extern: [calculate ? "1" : "0"],
      };

      console.log(`Test: ${numerator}/${denominator}, calculate: ${calculate}`);
      console.log(`Expected: ${expected}, Actual: ${resultString.output}`);
      console.log("----------------------------------------");
      console.log(`Expected (Object):`, test);
      console.log(`Actual (Object):`, resultObject);

      const stringResultPass = expected === resultString.output;
      const objectResultPass =
        JSON.stringify(test) === JSON.stringify(resultObject);

      if (stringResultPass) {
        SuccessPointsStringTestingFraction++;
      }

      if (!objectResultPass) {
        SuccessPointsObjectTestingFraction++;
      }

      console.log("----------------------------------------");
      console.log(`\nString Test ${stringResultPass ? "passed" : "failed"}`);
      console.log(`Object Test ${objectResultPass ? "failed" : "passed"}\n`);
      console.log("----------------------------------------");
    }
    console.log("----------------------------------------");

    console.log(
      "\nString Test Success:",
      SuccessPointsStringTestingFraction + "\n"
    );
    console.log(
      "Object Test Success:",
      SuccessPointsObjectTestingFraction + "\n"
    );

    console.log("----------------------------------------");

    if (SuccessPointsStringTestingFraction == tests.length) {
      console.log("----------------------------------------");
      console.log("Test 1 pass");
      console.log("----------------------------------------");
      SuccessPointsFullScoreDone++;
    } else {
      console.log("----------------------------------------");
      console.log("Test 1 failed");
      console.log("----------------------------------------");
    }
    if (SuccessPointsObjectTestingFraction == tests.length) {
      console.log("----------------------------------------");
      console.log("Test 2 pass");
      console.log("----------------------------------------");
      SuccessPointsFullScoreDone++;
    } else {
      console.log("----------------------------------------");
      console.log("Test 2 failed");
      console.log("----------------------------------------");
    }
  }
}

FractionTesting.runTests();
console.log("----------------------------------------");
console.log(
  `\nUse time to pass the 1st and the 2nd test: ${Date.now() - StartTime}ms\n`
);
console.log("----------------------------------------");
TimePassTest = Date.now();

/**
 * Run test for the sqrt function
 */
class SqrtTesting {
  static runTests() {
    const tests: {
      num: number;
      expected: number;
    }[] = [
      { num: 1, expected: 1 },
      { num: 3, expected: 1.7320508075688772 },
      { num: 5, expected: 2.23606797749979 },
      { num: 2, expected: 1.414213562373095 },
      { num: 7, expected: 0.875 },
      { num: 4, expected: 2 },
      { num: 9, expected: 3 },
      { num: 12, expected: 3.4641016151377544 },
      { num: 5, expected: 2.236067977499978 },
    ];

    for (const test of tests) {
      const { num, expected } = test;
      const sqrotm = sqroot(convst(num));
      const resultString: MathApplicationBasisType = sqrotm;
      const resultObject: MathApplicationBasisType = {
        output: resultString.output,
        operation: "sqrt",
        n: num,
      };

      console.log(`Test: ${num}`);
      console.log(`Expected: ${expected}, Actual: ${resultString.output}`);
      console.log("----------------------------------------");
      console.log(`Expected (Object):`, test);
      console.log(`Actual (Object):`, resultObject);

      const stringResultPass = expected === resultString.output;
      const objectResultPass =
        JSON.stringify(test) === JSON.stringify(resultObject);

      if (stringResultPass) {
        SuccessPointsStringTestingSqrt++;
      }

      if (!objectResultPass) {
        SuccessPointsObjectTestingSqrt++;
      }

      console.log("----------------------------------------");
      console.log(`\nString Test ${stringResultPass ? "passed" : "failed"}`);
      console.log(`Object Test ${objectResultPass ? "failed" : "passed"}\n`);
      console.log("----------------------------------------");
    }
    console.log("----------------------------------------");
    console.log("\nString Test Success:", SuccessPointsStringTestingSqrt);
    console.log("Object Test Success:", SuccessPointsObjectTestingSqrt, "\n");
    console.log("----------------------------------------");

    if (SuccessPointsStringTestingSqrt == tests.length) {
      console.log("----------------------------------------");
      console.log("Test 3 pass");
      console.log("----------------------------------------");

      SuccessPointsFullScoreDone++;
    } else {
      console.log("----------------------------------------");
      console.log("Test 3 failed");
      console.log("----------------------------------------");
    }
    if (SuccessPointsObjectTestingSqrt == tests.length) {
      console.log("----------------------------------------");
      console.log("Test 4 pass");
      console.log("----------------------------------------");

      SuccessPointsFullScoreDone++;
    } else {
      console.log("----------------------------------------");
      console.log("Test 4 failed");
      console.log("----------------------------------------");
    }
  }
}

SqrtTesting.runTests();

//! Droot
//! Fractorial
//! Calculate
//! Cdiage
//! Cbrt
//! Math

console.log("----------------------------------------");
console.log("\n", SuccessPointsFullScoreDone, "/ 4 tests ran successfully.\n");
console.log("----------------------------------------");

const EndTime = Date.now();
console.log("----------------------------------------");
console.log(`\nTime: ${EndTime - StartTime}ms`);
console.log("Start at:", StartTime);
console.log("End Time:", EndTime, "\n");
console.log("----------------------------------------");
