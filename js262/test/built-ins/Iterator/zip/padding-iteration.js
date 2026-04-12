

/*---
esid: sec-iterator.zip
description: >
  Perform iteration of the "padding" option.
info: |
  Iterator.zip ( iterables [ , options ] )
    ...
    14. If mode is "longest", then
      ...
      b. Else,
        i. Let paddingIter be Completion(GetIterator(paddingOption, sync)).
        ...
        iii. Let usingIterator be true.
        iv. Perform the following steps iterCount times:
          1. If usingIterator is true, then
            a. Set next to Completion(IteratorStepValue(paddingIter)).
            ...
            c. If next is done, then
              i. Set usingIterator to false.
            d. Else,
              i. Append next to padding.
          2. If usingIterator is false, append undefined to padding.
            v. If usingIterator is true, then
              1. Let completion be Completion(IteratorClose(paddingIter, NormalCompletion(unused))).
              ...
    ...

  GetIterator ( obj, kind )
    ...
    2. Else,
      a. Let method be ? GetMethod(obj, %Symbol.iterator%).
    3. If method is undefined, throw a TypeError exception.
    4. Return ? GetIteratorFromMethod(obj, method).

  GetIteratorFromMethod ( obj, method )
    1. Let iterator be ? Call(method, obj).
    2. If iterator is not an Object, throw a TypeError exception.
    3. Return ? GetIteratorDirect(iterator).

  GetIteratorDirect ( obj )
    1. Let nextMethod be ? Get(obj, "next").
    2. Let iteratorRecord be the Iterator Record { [[Iterator]]: obj, [[NextMethod]]: nextMethod, [[Done]]: false }.
    3. Return iteratorRecord.
includes: [proxyTrapsHelper.js, compareArray.js]
features: [joint-iteration]
---*/

function makeProxyWithGetHandler(log, name, obj) {
  return new Proxy(obj, allowProxyTraps({
    get(target, propertyKey, receiver) {
      log.push(`${name}::${String(propertyKey)}`);
      return Reflect.get(target, propertyKey, receiver);
    }
  }));
}


assert.throws(TypeError, function() {
  Iterator.zip([], {
    mode: "longest",
    padding: {},
  });
});

for (var n = 0; n <= 5; ++n) {
  var iterables = Array(n).fill([]);

  for (var k = 0; k <= n + 2; ++k) {
    var elements = Array(k).fill(0);
    var elementsIter = elements.values();

    var log = [];

    var padding = makeProxyWithGetHandler(log, "padding", {
      [Symbol.iterator]() {
        log.push("call iterator");

        
        assert.sameValue(this, padding);
        assert.sameValue(arguments.length, 0);

        return this;
      },
      next() {
        log.push("call next");

        
        assert.sameValue(this, padding);
        assert.sameValue(arguments.length, 0);

        return elementsIter.next();
      },
      return() {
        log.push("call return");

        
        assert.sameValue(this, padding);
        assert.sameValue(arguments.length, 0);

        return {};
      }
    });

    Iterator.zip(iterables, {mode: "longest", padding});

    
    var expected = [
      "padding::Symbol(Symbol.iterator)",
      "call iterator",
      "padding::next",
    ];

    
    for (var i = 0; i < Math.min(n, k); ++i) {
      expected.push("call next");
    }

    
    if (n > k) {
      expected.push("call next");
    } else {
      expected.push(
        "padding::return",
        "call return"
      );
    }

    assert.compareArray(log, expected);
  }
}
