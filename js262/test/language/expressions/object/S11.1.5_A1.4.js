

/*---
info: |
    Evaluate the production ObjectLiteral: { Identifier :
    AssignmentExpression}
es5id: 11.1.5_A1.4
description: >
    Checking various properteis and contents of the object defined
    with "var object = {prop : true}"
---*/

var object = {prop : true};


if (typeof object !== "object") {
  throw new Test262Error('#1: var object = {prop : true}; typeof object === "object". Actual: ' + (typeof object));
}


if (object instanceof Object !== true) {
  throw new Test262Error('#2: var object = {prop : true}; object instanceof Object === true');
}


if (object.toString !== Object.prototype.toString) {
  throw new Test262Error('#3: var object = {prop : true}; object.toString === Object.prototype.toString. Actual: ' + (object.toString));
}


if (object["prop"] !== true) {
  throw new Test262Error('#4: var object = {prop : true}; object["prop"] === true');
}


if (object.prop !== true) {
  throw new Test262Error('#5: var object = {prop : true}; object.prop === true');
}
