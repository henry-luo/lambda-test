

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var promise = Promise.resolve(1);
var FakeCtor = function(exec){ exec(function(){}, function(){}); };
Object.defineProperty(Promise, Symbol.species, {value: FakeCtor});

promise.then(function(){});

