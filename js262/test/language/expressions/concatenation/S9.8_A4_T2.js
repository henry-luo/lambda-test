

/*---
info: |
    Result of String conversion from string value is the input argument (no
    conversion)
es5id: 9.8_A4_T2
description: Some strings convert to String by implicit transformation
---*/


var x1 = "abc";
if (x1 + "" !== x1) {
  throw new Test262Error('#1: "abc" + "" === "abc". Actual: ' + ("abc" + ""));
}


var x2 = "abc";
if (typeof x2 + "" !== typeof x2) { 
  throw new Test262Error('#2: typeof "abc" + "" === "string". Actual: ' + (typeof "abc" + ""));
}
