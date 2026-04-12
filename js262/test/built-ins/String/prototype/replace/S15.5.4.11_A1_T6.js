

/*---
info: String.prototype.replace (searchValue, replaceValue)
es5id: 15.5.4.11_A1_T6
description: >
    Call replace (searchValue, replaceValue) function with x and
    Function("return arguments[1]+42;") arguments of new String
    object. x is undefined variable
---*/


if (new String("undefined").replace(x, Function("return arguments[1]+42;")) !== "42") {
  throw new Test262Error('#1: var x; new String("undefined").replace(x,Function("return arguments[1]+42;")) === "42". Actual: ' + new String("undefined").replace(x, Function("return arguments[1]+42;")));
}


var x;
