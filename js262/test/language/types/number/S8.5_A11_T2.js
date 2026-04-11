

/*---
info: The integer 0 has two representations, +0 and -0
es5id: 8.5_A11_T2
description: Compare positive_zero and negative_zero
---*/

var p_zero=+0;
var n_zero=-0;


if ((p_zero == n_zero) !== true){
  throw new Test262Error('#1: var p_zero=+0; var n_zero=-0; p_zero != n_zero');
}


if ((n_zero == 0) !== true){
  throw new Test262Error('#2: var p_zero=+0; var n_zero=-0; n_zero == 0');
}


if ((p_zero == -0) !== true){
  throw new Test262Error('#3: var p_zero=+0; var n_zero=-0; p_zero == -0');
}


if ((p_zero === 0) !== true){
  throw new Test262Error('#4: var p_zero=+0; var n_zero=-0; p_zero === 0');
}


if ((n_zero === -0) !== true){
  throw new Test262Error('#5: var p_zero=+0; var n_zero=-0; n_zero === -0');
}
