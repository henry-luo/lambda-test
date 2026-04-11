

/*---
description: >
    In the absence of the "use strict" directive, functions declared as methods
    obey "global" ThisMode semantics.
es6id: 14.3.8
flags: [noStrict]
---*/

var global = (function() { return this; }());
var thisValue = null;
var method = {
  method() {
    thisValue = this;
  }
}.method;

method();

assert.sameValue(thisValue, global);
