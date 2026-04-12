

/*---
esid: sec-promise.allsettled
description: >
  Resolve when argument is a string
info: |
  Promise.allSettled ( iterable )

  ...
  4. Let iteratorRecord be GetIterator(iterable).
  5. IfAbruptRejectPromise(iteratorRecord, promiseCapability).
  ...

  #sec-getiterator
  GetIterator ( obj [ , hint [ , method ] ] )

  ...
  Let iterator be ? Call(method, obj).
  If Type(iterator) is not Object, throw a TypeError exception.
  ...
features: [Promise.allSettled, Symbol.iterator]
flags: [async]
---*/

try {
  Promise.allSettled('').then(function(v) {
    assert.sameValue(v.length, 0);
  }, function() {
    $DONE('The promise should be resolved, but was rejected');
  }).then($DONE, $DONE);
} catch (error) {
  $DONE(`The promise should be resolved, but threw an exception: ${error.message}`);
}
