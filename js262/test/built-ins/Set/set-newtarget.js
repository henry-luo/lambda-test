

/*---
esid: sec-set-constructor
description: >
    Set ( [ iterable ] )

    When the Set function is called with optional argument iterable the following steps are taken:

    ...
    2. Let set be OrdinaryCreateFromConstructor(NewTarget, "%SetPrototype%", «‍[[SetData]]» ).
    ...

---*/

var s1 = new Set();

assert.sameValue(
  Object.getPrototypeOf(s1),
  Set.prototype,
  "`Object.getPrototypeOf(s1)` returns `Set.prototype`"
);

var s2 = new Set([1, 2]);

assert.sameValue(
  Object.getPrototypeOf(s2),
  Set.prototype,
  "`Object.getPrototypeOf(s2)` returns `Set.prototype`"
);
