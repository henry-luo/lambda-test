

/*---
info: -Infinity is the same as Number.NEGATIVE_INFINITY
es5id: 8.5_A12.2
description: Compare -Infinity with Number.NEGATIVE_INFINITY
---*/

var n_inf=-Infinity;


if (n_inf !== Number.NEGATIVE_INFINITY){
  throw new Test262Error('#1: -Infinity is the same as Number.NEGATIVE_INFINITY');
}
