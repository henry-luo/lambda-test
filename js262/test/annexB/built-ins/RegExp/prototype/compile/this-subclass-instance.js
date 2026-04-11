

/*---
esid: sec-regexp.prototype.compile
description: RegExp.prototype.compile throws a TypeError for calls on subclasses
features: [legacy-regexp,class]
---*/

const subclass_regexp = new (class extends RegExp {})("");

assert.throws(
  TypeError,
  function () {
    subclass_regexp.compile();
  });

assert.throws(
  TypeError,
  function () {
    RegExp.prototype.compile.call(subclass_regexp);
  });
