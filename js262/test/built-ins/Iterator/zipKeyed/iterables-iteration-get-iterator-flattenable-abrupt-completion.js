

/*---
esid: sec-iterator.zipkeyed
description: >
  Handle abrupt completions during iterables iteration.
info: |
  Iterator.zipKeyed ( iterables [ , options ] )
    ...
    12. For each element key of allKeys, do
      ...
      c. If desc is not undefined and desc.[[Enumerable]] is true, then
        ...
        iii. If value is not undefined, then
          ...
          2. Let iter be Completion(GetIteratorFlattenable(value, reject-strings)).
          3. IfAbruptCloseIterators(iter, iters).
          ...

  GetIteratorFlattenable ( obj, primitiveHandling )
    1. If obj is not an Object, then
      a. If primitiveHandling is reject-primitives, throw a TypeError exception.
      b. Assert: primitiveHandling is iterate-string-primitives.
      c. If obj is not a String, throw a TypeError exception.
    2. Let method be ? GetMethod(obj, %Symbol.iterator%).
    3. If method is undefined, then
      a. Let iterator be obj.
    4. Else,
      a. Let iterator be ? Call(method, obj).
    5. If iterator is not an Object, throw a TypeError exception.
    6. Return ? GetIteratorDirect(iterator).

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

var badIterators = [
  
  {
    iterator: "bad iterator",
    error: TypeError
  },

  
  {
    iterator: {
      get [Symbol.iterator]() {
        throw new ExpectedError();
      }
    },
    error: ExpectedError,
  },

  
  {
    iterator: {
      [Symbol.iterator]() {
        throw new ExpectedError();
      }
    },
    error: ExpectedError,
  },

  
  {
    iterator: {
      get next() {
        throw new ExpectedError();
      }
    },
    error: ExpectedError,
  },
];

function makeIterables(badIterator) {
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

  var iterables = {first, second, badIterator};

  return {log, iterables};
}

for (var {iterator, error} of badIterators) {
  var {log, iterables} = makeIterables(iterator);

  assert.throws(error, function() {
    Iterator.zipKeyed(iterables);
  });

  
  assert.compareArray(log, [
    "close second iterator",
    "close first iterator",
  ]);
}
