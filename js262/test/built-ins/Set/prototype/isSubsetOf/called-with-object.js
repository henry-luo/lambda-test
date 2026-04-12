

/*---
esid: sec-getsetrecord
description: GetSetRecord throws if obj is not an object
info: |
    1. If obj is not an Object, throw a TypeError exception.
features: [set-methods]
---*/

let s1 = new Set([1]);
assert.throws(
  TypeError,
  function () {
    s1.isSubsetOf(1);
  },
  "number"
);

assert.throws(
  TypeError,
  function () {
    s1.isSubsetOf("");
  },
  "string"
);

assert.throws(
  TypeError,
  function () {
    s1.isSubsetOf(1n);
  },
  "bigint"
);

assert.throws(
  TypeError,
  function () {
    s1.isSubsetOf(false);
  },
  "boolean"
);

assert.throws(
  TypeError,
  function () {
    s1.isSubsetOf(undefined);
  },
  "undefined"
);

assert.throws(
  TypeError,
  function () {
    s1.isSubsetOf(null);
  },
  "null"
);

assert.throws(
  TypeError,
  function () {
    s1.isSubsetOf(Symbol("test"));
  },
  "symbol"
);
