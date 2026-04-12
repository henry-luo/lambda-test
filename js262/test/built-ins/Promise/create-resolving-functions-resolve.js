

/*---
esid: sec-createresolvingfunctions
description: >
  resolve is anonymous built-in function with length of 1.
info: |
  CreateResolvingFunctions ( promise )

  ...
  3. Let resolve be ! CreateBuiltinFunction(stepsResolve, « [[Promise]], [[AlreadyResolved]] »).
features: [Reflect.construct, arrow-function]
includes: [isConstructor.js]
flags: [async]
---*/

Promise.resolve(1).then(function() {
  return Promise.resolve();
}).then($DONE, $DONE);

var then = Promise.prototype.then;
Promise.prototype.then = function(resolve, reject) {
  assert.sameValue(isConstructor(resolve), false, 'isConstructor(resolve) must return false');
  assert.throws(TypeError, () => {
    new resolve();
  });

  assert.sameValue(resolve.length, 1, 'The value of resolve.length is 1');
  assert.sameValue(resolve.name, '', 'The value of resolve.name is ""');

  return then.call(this, resolve, reject);
};
