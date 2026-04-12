

/*---
esid: sec-iterator.zip
description: >
  Abrupt completion for IteratorClose in "padding" option iteration.
info: |
  Iterator.zip ( iterables [ , options ] )
    ...
    14. If mode is "longest", then
      ...
      b. Else,
        i. Let paddingIter be Completion(GetIterator(paddingOption, sync)).
        ...
        v. If usingIterator is true, then
          1. Let completion be Completion(IteratorClose(paddingIter, NormalCompletion(unused))).
          2. IfAbruptCloseIterators(completion, iters).
    ...

  IfAbruptCloseIterators ( value, iteratorRecords )
    1. Assert: value is a Completion Record.
    2. If value is an abrupt completion, return ? IteratorCloseAll(iteratorRecords, value).
    3. Else, set value to value.[[Value]].

  IteratorCloseAll ( iters, completion )
    1. For each element iter of iters, in reverse List order, do
      a. Set completion to Completion(IteratorClose(iter, completion)).
    2. Return ? completion.

  IteratorClose ( iteratorRecord, completion )
    1. Assert: iteratorRecord.[[Iterator]] is an Object.
    2. Let iterator be iteratorRecord.[[Iterator]].
    3. Let innerResult be Completion(GetMethod(iterator, "return")).
    4. If innerResult is a normal completion, then
      a. Let return be innerResult.[[Value]].
      b. If return is undefined, return ? completion.
      c. Set innerResult to Completion(Call(return, iterator)).
    5. If completion is a throw completion, return ? completion.
    ...
includes: [compareArray.js]
features: [joint-iteration]
---*/

var log = [];

var first = {
  next() {
    log.push("unexpected call to next method");
  },
  return() {
    
    assert.sameValue(this, first);
    assert.sameValue(arguments.length, 0);

    
    log.push("first return");

    
    throw new Test262Error();
  }
};

var second = {
  next() {
    log.push("unexpected call to next method");
  },
  return() {
    
    assert.sameValue(this, second);
    assert.sameValue(arguments.length, 0);

    
    log.push("second return");

    
    throw new Test262Error();
  }
};

var third = {
  next() {
    log.push("unexpected call to next method");
  },
  get return() {
    
    assert.sameValue(this, third);
    assert.sameValue(arguments.length, 0);

    
    log.push("third return");

    
    throw new Test262Error();
  }
};

function ExpectedError() {}


var padding = {
  [Symbol.iterator]() {
    return this;
  },
  next() {
    return {done: false};
  },
  return() {
    log.push("padding return");

    throw new ExpectedError();
  },
};

assert.throws(ExpectedError, function() {
  Iterator.zip([first, second, third], {mode: "longest", padding});
});

assert.compareArray(log, [
  "padding return",
  "third return",
  "second return",
  "first return",
]);
