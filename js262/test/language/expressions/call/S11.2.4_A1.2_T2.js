

/*---
info: "Arguments : (ArgumentList)"
es5id: 11.2.4_A1.2_T2
description: Function is declared with FormalParameterList
---*/

var f_arg = function(x,y) {
  return arguments;
}


if (f_arg(1,2,3).length !== 3) {
  throw new Test262Error('#1: f_arg = function(x,y) {return arguments;} f_arg(1,2,3).length === 3. Actual: ' + (f_arg(1,2,3).length));
}


if (f_arg(1)[0] !== 1) {
  throw new Test262Error('#1: f_arg = function(x,y) {return arguments;} f_arg(1)[0] === 1. Actual: ' + (f_arg(1)[0]));
}


if (f_arg(1,2)[1] !== 2) {
  throw new Test262Error('#3: f_arg = function(x,y) {return arguments;} f_arg(1,2)[1] === 2. Actual: ' + (f_arg(1,2)[1]));
}


if (f_arg(1,2,3)[2] !== 3) {
  throw new Test262Error('#4: f_arg = function(x,y) {return arguments;} f_arg(1,2,3)[2] === 3. Actual: ' + (f_arg(1,2,3)[2]));
}


if (f_arg(1,2,3)[3] !== undefined) {
  throw new Test262Error('#5: f_arg = function(x,y) {return arguments;} f_arg(1,2,3)[3] === undefined. Actual: ' + (f_arg(1,2,3)[3]));
}


if (f_arg.length !== 2) {
  throw new Test262Error('#6: f_arg = function(x,y) {return arguments;} f_arg.length === 2. Actual: ' + (f_arg.length));
}
