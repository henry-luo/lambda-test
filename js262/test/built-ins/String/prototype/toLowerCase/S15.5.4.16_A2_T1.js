

/*---
info: String.prototype.toLowerCase() return a string, but not a String object
es5id: 15.5.4.16_A2_T1
description: Checking returned result
---*/


if ("Hello, WoRlD!".toLowerCase() !== "hello, world!") {
  throw new Test262Error('#1: "Hello, WoRlD!".toLowerCase() === "hello, world!". Actual: ' + ("Hello, WoRlD!".toLowerCase()));
}


if ("Hello, WoRlD!".toLowerCase() !== String("hello, world!")) {
  throw new Test262Error('#2: "Hello, WoRlD!".toLowerCase() === String("hello, world!"). Actual: ' + ("Hello, WoRlD!".toLowerCase()));
}


if ("Hello, WoRlD!".toLowerCase() === new String("hello, world!")) {
  throw new Test262Error('#3: "Hello, WoRlD!".toLowerCase() !== new String("hello, world!")');
}

