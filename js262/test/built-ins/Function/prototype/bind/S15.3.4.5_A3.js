

/*---
es5id: 15.3.4.5_A3
description: Function.prototype.bind must exist
---*/
assert(
  'bind' in Function.prototype,
  'The result of evaluating (\'bind\' in Function.prototype) is expected to be true'
);
