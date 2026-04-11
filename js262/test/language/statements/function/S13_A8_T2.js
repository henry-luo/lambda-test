

/*---
info: Arguments property of activation object contains real params to be passed
es5id: 13_A8_T2
description: >
    Creating a function with no parameters and using arguments.length
    property in order to perform the test
---*/

function __func() {
 	return arguments.length;
 }
 

if (__func('A') !== 1) {
 	throw new Test262Error('#1: __func(\'A\') === 1. Actual: __func(\'A\') ==='+__func('A'));
}


if (__func('A', 'B', 1, 2,__func) !== 5) {
	throw new Test262Error('#2: __func(\'A\', \'B\', 1, 2,__func) === 5. Actual: __func(\'A\', \'B\', 1, 2,__func) ==='+__func('A', 'B', 1, 2,__func));
}


if (__func() !== 0) {
	throw new Test262Error('#3: __func() === 0. Actual: __func() ==='+__func());
}

