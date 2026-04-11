

/*---
esid: sec-ecmascript-function-objects-call-thisargument-argumentslist
description: >
    Removal of lexical environment for the function parameters and body
info: |
    [...]
    3. Let callerContext be the running execution context.
    [...]
    8. Remove calleeContext from the execution context stack and restore
       callerContext as the running execution context.
    [...]
features: [let]
---*/

var probe;


(function() {
  let x = 'inside';
  probe = function() { return x; };
}());

var x = 'outside';

assert.sameValue(probe(), 'inside');
assert.sameValue(x, 'outside');
