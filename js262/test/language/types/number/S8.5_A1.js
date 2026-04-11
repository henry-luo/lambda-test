

/*---
info: NaN !== NaN
es5id: 8.5_A1
description: Compare NaN with NaN
---*/

var x = Number.NaN;
var x_ = Number.NaN;


if (x === x_){
  throw new Test262Error('#1: NaN !== NaN ');
}

