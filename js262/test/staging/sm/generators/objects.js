

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-generators-shell.js, deepEqual.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


function TestGeneratorObject() {
  function* g() { yield 1; }

  var iter = g();
  assert.sameValue(Object.getPrototypeOf(iter), g.prototype);
  assertTrue(iter instanceof g);
  assert.sameValue(String(iter), "[object Generator]");
  assert.deepEqual(Object.getOwnPropertyNames(iter), []);
  assertNotEq(g(), iter);
}
TestGeneratorObject();


function TestGeneratorObjectMethods() {
  function* g() { yield 1; }
  var iter = g();

  assert.sameValue(iter.next.length, 1);
  assert.sameValue(iter.return.length, 1);
  assert.sameValue(iter.throw.length, 1);

  function TestNonGenerator(non_generator) {
    assertThrowsInstanceOf(function() { iter.next.call(non_generator); }, TypeError);
    assertThrowsInstanceOf(function() { iter.next.call(non_generator, 1); }, TypeError);
    assertThrowsInstanceOf(function() { iter.return.call(non_generator, 1); }, TypeError);
    assertThrowsInstanceOf(function() { iter.throw.call(non_generator, 1); }, TypeError);
    assertThrowsInstanceOf(function() { iter.close.call(non_generator); }, TypeError);
  }

  TestNonGenerator(1);
  TestNonGenerator({});
  TestNonGenerator(function(){});
  TestNonGenerator(g);
  TestNonGenerator(g.prototype);
}
TestGeneratorObjectMethods();

