

/*---
description: >
    String.prototype.sub returns a string of HTML describing a single HTML
    subscript element. The element's content is the `this` value of the
    function invocation, coerced to a string.
es6id: B.2.3.13
---*/

assert.sameValue('_'.sub(), '<sub>_</sub>');
assert.sameValue('<'.sub(), '<sub><</sub>');
assert.sameValue(String.prototype.sub.call(0x2A), '<sub>42</sub>');
assert.throws(TypeError, function() {
  String.prototype.sub.call(undefined);
});
assert.throws(TypeError, function() {
  String.prototype.sub.call(null);
});
