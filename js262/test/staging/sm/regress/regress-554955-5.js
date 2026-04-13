

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
function f(s) {
    if (s) {
        function b() { }
    }
    return function(a) {
        eval(a);
        return b;
    };
}

var b = 1;
var g1 = f(false);
var g2 = f(true);


g1('');


assert.sameValue(typeof g2(''), "function");

