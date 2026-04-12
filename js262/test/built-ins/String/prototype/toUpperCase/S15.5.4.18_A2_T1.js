

/*---
info: String.prototype.toUpperCase() return a string, but not a String object
es5id: 15.5.4.18_A2_T1
description: Checking returned result
---*/


if ("Hello, WoRlD!".toUpperCase() !== "HELLO, WORLD!") {
  throw new Test262Error('#1: "Hello, WoRlD!".toUpperCase() === "HELLO, WORLD!". Actual: ' + ("Hello, WoRlD!".toUpperCase()));
}


if ("Hello, WoRlD!".toUpperCase() !== String("HELLO, WORLD!")) {
  throw new Test262Error('#2: "Hello, WoRlD!".toUpperCase() === String("HELLO, WORLD!"). Actual: ' + ("Hello, WoRlD!".toUpperCase()));
}


if ("Hello, WoRlD!".toUpperCase() === new String("HELLO, WORLD!")) {
  throw new Test262Error('#3: "Hello, WoRlD!".toUpperCase() !== new String("HELLO, WORLD!")');
}

