

/*---
info: |
    [[Get]](P) method should return undefined when property P does not exist
    both in instance and prototype
es5id: 8.12.3_A2
description: >
    Try to get P when property P does not exist both in instance and
    prototype
---*/

var __obj={};


if (__obj.propFoo !== undefined){
  throw new Test262Error('#1: var __obj={}; __obj.propFoo === undefined. Actual: ' + (__obj.propFoo));
}


if (__obj['propFoo'] !== undefined){
  throw new Test262Error('#2: var __obj={}; __obj[\'propFoo\'] === undefined. Actual: ' + (__obj['propFoo']));
}

