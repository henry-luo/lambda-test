

/*---
description: >
    String.prototype.blink returns a string of HTML describing a single HTML
    blink element. The element's content is the `this` value of the function
    invocation, coerced to a string.
es6id: B.2.3.4
---*/

assert.sameValue('_'.blink(), '<blink>_</blink>');
assert.sameValue('<'.blink(), '<blink><</blink>');
assert.sameValue(String.prototype.blink.call(0x2A), '<blink>42</blink>');
assert.throws(TypeError, function() {
  String.prototype.blink.call(undefined);
});
assert.throws(TypeError, function() {
  String.prototype.blink.call(null);
});
