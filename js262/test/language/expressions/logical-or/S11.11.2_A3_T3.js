

/*---
info: If ToBoolean(x) is false, return y
es5id: 11.11.2_A3_T3
description: Type(x) and Type(y) vary between primitive string and String object
---*/


if (("" || "1") !== "1") {
  throw new Test262Error('#1: ("" || "1") === "1"');
}


var y = new String("1");
if (("" || y) !== y) {
  throw new Test262Error('#2: (var y = new String("1"); "" || y) === y');
}
