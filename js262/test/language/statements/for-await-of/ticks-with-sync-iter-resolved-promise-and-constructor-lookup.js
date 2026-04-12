

/*---
esid: sec-runtime-semantics-forin-div-ofbodyevaluation-lhs-stmt-iterator-lhskind-labelset
description: >
  Ensure the number of ticks and Promise constructor lookups is correct with a Async-from-Sync iterator.
info: |
  13.7.5.13 Runtime Semantics: ForIn/OfBodyEvaluation ( lhs, stmt, iteratorRecord, iterationKind,
                                                        lhsKind, labelSet [ , iteratorKind ] )
  25.1.4.2.1 %AsyncFromSyncIteratorPrototype%.next
  25.1.4.4 AsyncFromSyncIteratorContinuation
  25.6.4.5.1 PromiseResolve
  6.2.3.1 Await

includes: [compareArray.js]
flags: [async]
features: [async-iteration]
---*/


var expected = [
  
  "pre",

  
  "constructor",

  
  "constructor",

  
  "tick 1",

  
  "tick 2",

  
  "loop",

  
  "constructor",

  
  "tick 3",

  
  "tick 4",

  
  "post",
];


var actual = [];


async function f() {
  var p = Promise.resolve(0);
  actual.push("pre");
  for await (var x of [p]) {
    actual.push("loop");
  }
  actual.push("post");
}


Promise.resolve(0)
  .then(() => actual.push("tick 1"))
  .then(() => actual.push("tick 2"))
  .then(() => actual.push("tick 3"))
  .then(() => actual.push("tick 4"))
  .then(() => {
    assert.compareArray(actual, expected, "Ticks and constructor lookups");
}).then($DONE, $DONE);


Object.defineProperty(Promise.prototype, "constructor", {
  get() {
    actual.push("constructor");
    return Promise;
  },
  configurable: true,
});


f();
