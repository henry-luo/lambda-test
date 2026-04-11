

/*---
description: >
    String.prototype.strike returns a string of HTML describing a single HTML
    strikethrough element. The element's content is the `this` value of the
    function invocation, coerced to a string.
es6id: B.2.3.12
---*/

assert.sameValue('_'.strike(), '<strike>_</strike>');
assert.sameValue('<'.strike(), '<strike><</strike>');
assert.sameValue(String.prototype.strike.call(0x2A), '<strike>42</strike>');
assert.throws(TypeError, function() {
  String.prototype.strike.call(undefined);
});
assert.throws(TypeError, function() {
  String.prototype.strike.call(null);
});
