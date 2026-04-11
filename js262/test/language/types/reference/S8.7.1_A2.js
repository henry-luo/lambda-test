

/*---
info: |
    Delete operator can't delete reference, so it returns false to be applyed
    to reference
es5id: 8.7.1_A2
description: Try to delete y, where y is var y=1
flags: [noStrict]
---*/

var y = 1;


var result = delete y;
if(result){
  throw new Test262Error('#1: y = 1; (delete y) === false. Actual: ' + result);
};


if (y !== 1) {
  throw new Test262Error('#2: y = 1; delete y; y === 1. Actual: ' + (y));
}

