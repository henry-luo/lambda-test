

/*---
esid: sec-promise.any-reject-element-functions
description: The [[Extensible]] slot of Promise.any Reject Element functions
info: |
  17 ECMAScript Standard Built-in Objects:
    Unless specified otherwise, the [[Extensible]] internal slot
    of a built-in object initially has the value true.
features: [Promise.any]
---*/

var rejectElementFunction;
var thenable = {
  then(_, reject) {
    rejectElementFunction = reject;
  }
};

function NotPromise(executor) {
  executor(function() {}, function() {});
}
NotPromise.resolve = function(v) {
  return v;
};
Promise.any.call(NotPromise, [thenable]);

assert(Object.isExtensible(rejectElementFunction));
