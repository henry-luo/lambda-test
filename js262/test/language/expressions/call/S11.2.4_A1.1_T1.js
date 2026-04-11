

/*---
info: "Arguments : ()"
es5id: 11.2.4_A1.1_T1
description: Function is declared with no FormalParameterList
---*/

function f_arg() {
  return arguments;
}


if (f_arg().length !== 0) {
  throw new Test262Error('#1: function f_arg() {return arguments;} f_arg().length === 0. Actual: ' + (f_arg().length));
}


if (f_arg()[0] !== undefined) {
  throw new Test262Error('#2: function f_arg() {return arguments;} f_arg()[0] === undefined. Actual: ' + (f_arg()[0]));
}
