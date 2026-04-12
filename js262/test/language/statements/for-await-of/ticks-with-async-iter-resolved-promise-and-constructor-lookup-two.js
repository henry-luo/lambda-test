

/*---
esid: sec-runtime-semantics-forin-div-ofbodyevaluation-lhs-stmt-iterator-lhskind-labelset
description: >
  Ensure the number of ticks and Promise constructor lookups is correct with custom async iterator.
info: |
  13.7.5.13 Runtime Semantics: ForIn/OfBodyEvaluation ( lhs, stmt, iteratorRecord, iterationKind,
                                                        lhsKind, labelSet [ , iteratorKind ] )
  25.6.4.5.1 PromiseResolve
  6.2.3.1 Await

includes: [compareArray.js]
flags: [async]
features: [async-iteration]
---*/


var expected = [
  
  "pre",

  
  "constructor",

  
  "tick 1",

  
  "loop",

  
  "constructor",

  
  "tick 2",

  
  "post",
];


var actual = [];


function toAsyncIterator(iterable) {
  return {
    [Symbol.asyncIterator]() {
      var iter = iterable[Symbol.iterator]();
      return {
        next() {
          return Promise.resolve(iter.next());
        }
      };
    }
  };
}


async function f() {
  var p = Promise.resolve(0);
  actual.push("pre");
  for await (var x of toAsyncIterator([p])) {
    actual.push("loop");
  }
  actual.push("post");
}


Promise.resolve(0)
  .then(() => actual.push("tick 1"))
  .then(() => actual.push("tick 2"))
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
