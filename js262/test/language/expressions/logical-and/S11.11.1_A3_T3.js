

/*---
info: If ToBoolean(x) is false, return x
es5id: 11.11.1_A3_T3
description: Type(x) and Type(y) vary between primitive string and String object
---*/


if (("" && "1") !== "") {
  throw new Test262Error('#1: ("" && "1") === ""');
}


if (("" && new String("1")) !== "") {
  throw new Test262Error('#2: ("" && new String("1")) === ""');
}
