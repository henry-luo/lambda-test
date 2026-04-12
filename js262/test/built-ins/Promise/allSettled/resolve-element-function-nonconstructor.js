

/*---
esid: sec-promise.allsettled-resolve-element-functions
description: Promise.allSettled Resolve Element functions are not constructors
info: |
  17 ECMAScript Standard Built-in Objects:
    Built-in function objects that are not identified as constructors do not
    implement the [[Construct]] internal method unless otherwise specified
    in the description of a particular function.
features: [Promise.allSettled]
---*/

var resolveElementFunction;
var thenable = {
  then(fulfill) {
    resolveElementFunction = fulfill;
  }
};

function NotPromise(executor) {
  executor(function() {}, function() {});
}
NotPromise.resolve = function(v) {
  return v;
};
Promise.allSettled.call(NotPromise, [thenable]);

assert.sameValue(Object.prototype.hasOwnProperty.call(resolveElementFunction, 'prototype'), false);
assert.throws(TypeError, function() {
  new resolveElementFunction();
});
