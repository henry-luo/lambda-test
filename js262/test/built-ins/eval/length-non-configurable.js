

/*---
info: The length property of eval does not have the attribute DontDelete
esid: sec-eval-x
description: Checking use hasOwnProperty, delete
---*/


if (eval.hasOwnProperty('length') !== true) {
  throw new Test262Error('#1: eval.hasOwnProperty(\'length\') === true. Actual: ' + (eval.hasOwnProperty('length')));
}

delete eval.length;


if (eval.hasOwnProperty('length') !== false) {
  throw new Test262Error('#2: delete eval.length; eval.hasOwnProperty(\'length\') === false. Actual: ' + (eval.hasOwnProperty('length')));
}


if (eval.length === undefined) {
  throw new Test262Error('#3: delete eval.length; eval.length !== undefined');
}
