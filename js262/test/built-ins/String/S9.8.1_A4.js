

/*---
info: If m is infinity, return the string "Infinity"
es5id: 9.8.1_A4
description: +/-Infinity convert to String by explicit transformation
---*/


if (String(Infinity) !== "Infinity") {
  throw new Test262Error('#1: String(Infinity) === "Infinity". Actual: ' + (String(Infinity)));
}


if (String(Number.POSITIVE_INFINITY) !== "Infinity") {
  throw new Test262Error('#2: String(Number.POSITIVE_INFINITY) === "Infinity". Actual: ' + (String(Number.POSITIVE_INFINITY)));
}


if (String(-Infinity) !== "-Infinity") {
  throw new Test262Error('#3: String(-Infinity) === "-Infinity". Actual: ' + (String(-Infinity)));
}


if (String(Number.NEGATIVE_INFINITY) !== "-Infinity") {
  throw new Test262Error('#4: String(Number.NEGATIVE_INFINITY) === "-Infinity". Actual: ' + (String(Number.NEGATIVE_INFINITY)));
}
