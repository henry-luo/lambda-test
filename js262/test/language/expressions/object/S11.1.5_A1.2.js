

/*---
info: |
    Evaluate the production ObjectLiteral: { NumericLiteral :
    AssignmentExpression}
es5id: 11.1.5_A1.2
description: >
    Checking various properteis and contents of the object defined
    with "var object = {1 : true}"
---*/

var object = {1 : true};


if (typeof object !== "object") {
  throw new Test262Error('#1: var object = {1 : true}; typeof object === "object". Actual: ' + (typeof object));
}


if (object instanceof Object !== true) {
  throw new Test262Error('#2: var object = {1 : true}; object instanceof Object === true');
}


if (object.toString !== Object.prototype.toString) {
  throw new Test262Error('#3: var object = {1 : true}; object.toString === Object.prototype.toString. Actual: ' + (object.toString));
}


if (object[1] !== true) {
  throw new Test262Error('#4: var object = {1 : true}; object[1] === true');
}


if (object["1"] !== true) {
  throw new Test262Error('#5: var object = {1 : true}; object["1"] === true');
}
