

/*---
description: >
    Evaluated code honors a Use Strict Directive in the Directive Prologue
esid: sec-strict-mode-code
info: |
    Eval code is strict mode code if it begins with a Directive Prologue that
    contains a Use Strict Directive or if the call to eval is a direct eval
    that is contained in strict mode code.
---*/

assert.throws(ReferenceError, function() {
  eval('"use strict"; unresolvable = null;');
});
