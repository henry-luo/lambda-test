

/*---
info: |
    RegExpInitialize ( obj, pattern, flags )
      5. If F contains any code unit other than "g", "i", "m", "s", "u", or "y" or if it contains the same code unit more than once, throw a SyntaxError exception.
esid: sec-regexpinitialize
description: Check that duplicate RegExp flags are disallowed
features: [regexp-dotall, regexp-match-indices]
---*/

new RegExp("", "mig"); 
assert.throws(SyntaxError, () => new RegExp("", "migg"), "duplicate g");

new RegExp("", "i"); 
assert.throws(SyntaxError, () => new RegExp("", "ii"), "duplicate i");

new RegExp("", "m"); 
assert.throws(SyntaxError, () => new RegExp("", "mm"), "duplicate m");

new RegExp("", "s"); 
assert.throws(SyntaxError, () => new RegExp("", "ss"), "duplicate s");

new RegExp("", "u"); 
assert.throws(SyntaxError, () => new RegExp("", "uu"), "duplicate u");

new RegExp("", "y"); 
assert.throws(SyntaxError, () => new RegExp("", "yy"), "duplicate y");

new RegExp("", "d"); 
assert.throws(SyntaxError, () => new RegExp("", "dd"), "duplicate d");
