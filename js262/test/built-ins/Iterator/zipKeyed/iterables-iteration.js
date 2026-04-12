

/*---
esid: sec-iterator.zipkeyed
description: >
  Perform iteration of the "iterables" argument.
info: |
  Iterator.zipKeyed ( iterables [ , options ] )
    ...
    10. Let allKeys be ? iterables.[[OwnPropertyKeys]]().
    11. Let keys be a new empty List.
    12. For each element key of allKeys, do
      a. Let desc be Completion(iterables.[[GetOwnProperty]](key)).
      ...
      c. If desc is not undefined and desc.[[Enumerable]] is true, then
        i. Let value be Completion(Get(iterables, key)).
        ...
        iii. If value is not undefined, then
          1. Append key to keys.
          2. Let iter be Completion(GetIteratorFlattenable(value, reject-strings)).
          ...
          4. Append iter to iters.
    ...
includes: [proxyTrapsHelper.js, compareArray.js]
features: [joint-iteration]
---*/


var throwingIterator = {
  next() {
    throw new Test262Error();
  },
  return() {
    throw new Test262Error();
  }
};

var iterableReturningThrowingIterator = {
  [Symbol.iterator]() {
    return throwingIterator;
  }
};


Iterator.zipKeyed({
  a: throwingIterator,
  b: iterableReturningThrowingIterator,
});


var badIterators = [
  null,
  true,
  "",
  Symbol(),
  0,
  0n,
  
];

for (var iterator of badIterators) {
  assert.throws(TypeError, function() {
    Iterator.zipKeyed({a: iterator});
  });
}


var log = [];

function makeProxyWithGetHandler(name, obj) {
  return new Proxy(obj, allowProxyTraps({
    ownKeys(target) {
      log.push(`${name}::[[OwnPropertyKeys]]}`);
      return Reflect.ownKeys(target);
    },
    getOwnPropertyDescriptor(target, propertyKey) {
      log.push(`${name}::[[GetOwnProperty]](${String(propertyKey)})`);
      return Reflect.getOwnPropertyDescriptor(target, propertyKey);
    },
    get(target, propertyKey, receiver) {
      log.push(`${name}::[[Get]](${String(propertyKey)})`);
      return Reflect.get(target, propertyKey, receiver);
    },
  }));
}

var iterables = makeProxyWithGetHandler("iterables", {
  
  a: makeProxyWithGetHandler("first", throwingIterator),

  
  b: makeProxyWithGetHandler("second", iterableReturningThrowingIterator),

  
  c: makeProxyWithGetHandler("third", {}),
});

Iterator.zipKeyed(iterables);

assert.compareArray(log, [
  "iterables::[[OwnPropertyKeys]]}",

  "iterables::[[GetOwnProperty]](a)",
  "iterables::[[Get]](a)",
  "first::[[Get]](Symbol(Symbol.iterator))",
  "first::[[Get]](next)",

  "iterables::[[GetOwnProperty]](b)",
  "iterables::[[Get]](b)",
  "second::[[Get]](Symbol(Symbol.iterator))",

  "iterables::[[GetOwnProperty]](c)",
  "iterables::[[Get]](c)",
  "third::[[Get]](Symbol(Symbol.iterator))",
  "third::[[Get]](next)",
]);
