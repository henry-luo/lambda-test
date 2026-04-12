

/*---
info: |
    Result of boolean conversion from nonempty string value (length is not
    zero) is true; from empty String (length is zero) is false
es5id: 9.2_A5_T2
description: "\"\" convert to Boolean by implicit transformation"
---*/


if (!("") !== true) {
  throw new Test262Error('#1: !("") === true. Actual: ' + (!("")));
}
