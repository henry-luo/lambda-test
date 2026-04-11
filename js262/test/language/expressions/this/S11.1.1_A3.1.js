

/*---
info: |
    Being in function code, "this" and eval("this"), called as a functions,
    return the global object
es5id: 11.1.1_A3.1
description: Creating function which returns "this" or eval("this")
flags: [noStrict]
---*/


function ReturnThis() {return this}
if (ReturnThis() !== this) {
  throw new Test262Error('#1: function ReturnThis() {return this} ReturnThis() === this. Actual: ' + (ReturnThis()));
}


function ReturnEvalThis() {return eval("this")}
if (ReturnEvalThis() !== this) {
  throw new Test262Error('#2: function ReturnEvalThis() {return eval("this")} ReturnEvalThis() === this. Actual: ' + (ReturnEvalThis()));
}
