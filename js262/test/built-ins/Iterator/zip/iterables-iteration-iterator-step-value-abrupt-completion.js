

/*---
esid: sec-iterator.zip
description: >
  Handle abrupt completions during iterables iteration.
info: |
  Iterator.zip ( iterables [ , options ] )
    ...
    12. Repeat, while next is not done,
      a. Set next to Completion(IteratorStepValue(inputIter)).
      b. IfAbruptCloseIterators(next, iters).
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

class ExpectedError extends Error {}

var log = [];

var first = {
  next() {
    log.push("unexpected call to next method");
  },
  return() {
    
    assert.sameValue(this, first);
    assert.sameValue(arguments.length, 0);

    
    log.push("close first iterator");

    
    throw new Test262Error();
  },
};

var second = {
  next() {
    log.push("unexpected call to next method");
  },
  return() {
    
    assert.sameValue(this, second);
    assert.sameValue(arguments.length, 0);

    
    log.push("close second iterator");

    
    throw new Test262Error();
  },
};

var elements = [first, second];
var elementsIter = elements.values();

var iterables = {
  [Symbol.iterator]() {
    return this;
  },
  next() {
    log.push("call next");
    var result = elementsIter.next();
    if (result.done) {
      throw new ExpectedError();
    }
    return result;
  },
  return() {
    
    log.push("UNEXPECTED - close iterables iterator");

    
    throw new Test262Error();
  },
};

assert.throws(ExpectedError, function() {
  Iterator.zip(iterables);
});


assert.compareArray(log, [
  "call next",
  "call next",
  "call next",
  "close second iterator",
  "close first iterator",
]);
