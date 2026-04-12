

/*---
info: |
    Being in anonymous code, "this" and eval("this"), called as a function,
    return the global object
es5id: 11.1.1_A4.1
description: Creating function with new Function() constructor
---*/


var MyFunction = new Function("return this");
if (MyFunction() !== this) {
  throw new Test262Error('#1: var MyFunction = new Function("return this"); MyFunction() === this. Actual: ' + (MyFunction()));
}


MyFunction = new Function("return eval(\'this\')");
if (MyFunction() !== this) {
  throw new Test262Error('#2: var MyFunction = new Function("return eval(\'this\')"); MyFunction() === this. Actual: ' + (MyFunction()));
}
