

/*---
description: >
    String.prototype.italics returns a string of HTML describing a single HTML
    italic element. The element's content is the `this` value of the function
    invocation, coerced to a string.
es6id: B.2.3.9
---*/

assert.sameValue('_'.italics(), '<i>_</i>');
assert.sameValue('<'.italics(), '<i><</i>');
assert.sameValue(String.prototype.italics.call(0x2A), '<i>42</i>');
assert.throws(TypeError, function() {
  String.prototype.italics.call(undefined);
});
assert.throws(TypeError, function() {
  String.prototype.italics.call(null);
});
