

/*---
info: String.prototype.replace (searchValue, replaceValue)
es5id: 15.5.4.11_A1_T7
description: >
    Call replace (searchValue, replaceValue) function with string and
    undefined arguments of String object
---*/


if (String(void 0).replace("e", undefined) !== "undundefinedfined") {
  throw new Test262Error('#1: String(void 0).replace("e",undefined) === "undundefinedfined". Actual: ' + String(void 0).replace("e", undefined));
}

