

/*---
description: >
    String.prototype.sup returns a string of HTML describing a single HTML
    superscript element. The element's content is the `this` value of the
    function invocation, coerced to a string.
es6id: B.2.3.14
---*/

assert.sameValue('_'.sup(), '<sup>_</sup>');
assert.sameValue('<'.sup(), '<sup><</sup>');
assert.sameValue(String.prototype.sup.call(0x2A), '<sup>42</sup>');
assert.throws(TypeError, function() {
  String.prototype.sup.call(undefined);
});
assert.throws(TypeError, function() {
  String.prototype.sup.call(null);
});
