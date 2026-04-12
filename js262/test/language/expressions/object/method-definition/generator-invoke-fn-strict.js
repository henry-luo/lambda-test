

/*---
description: >
    In the presence of the "use strict" directive, generator functions declared
    as methods obey "strict" ThisMode semantics.
es6id: 14.4.13
flags: [noStrict]
features: [generators]
---*/

var thisValue = null;
var method = {
  *method() {
    'use strict';
    thisValue = this;
  }
}.method;

method().next();

assert.sameValue(thisValue, undefined);
