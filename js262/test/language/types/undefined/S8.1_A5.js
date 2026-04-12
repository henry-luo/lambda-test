

/*---
info: Function argument that isn't provided has a value of undefined
es5id: 8.1_A5
description: Call function without provided argument
---*/


function test(arg) {

	if (typeof(arg) !== "undefined") {
    throw new Test262Error('#1: Function argument that isn\'t provided has a value of undefined. Actual: ' + (typeof(arg)));
  }
}

test();

