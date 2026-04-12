

/*---
info: |
    Type(x) and Type(y) are String-s.
    Return false, if x and y are exactly the same sequence of characters; otherwise, return true
es5id: 11.9.5_A5
description: x and y are primitive strings
---*/


if ("" !== "") {
  throw new Test262Error('#1: "" === ""');
}


if (" " !== " ") {
  throw new Test262Error('#2: " " === " "');
}


if ("string" !== "string") {
  throw new Test262Error('#3: "string" === "string"');
}


if (!(" string" !== "string ")) {
  throw new Test262Error('#4: " string" !== "string "');
}


if (!("1.0" !== "1")) {
  throw new Test262Error('#5: "1.0" !== "1"');
}
