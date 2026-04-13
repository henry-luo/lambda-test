

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var sym = Symbol.for("moon");
function checkNotWritable(obj) {
    
    obj[sym] = "portals";
    assert.sameValue(obj[sym], "cheese");

    
    assertThrowsInstanceOf(function () { "use strict"; obj[sym] = "robots"; }, TypeError);
    assert.sameValue(obj[sym], "cheese");
}

var x = {};
Object.defineProperty(x, sym, {
    configurable: true,
    enumerable: true,
    value: "cheese",
    writable: false
});

checkNotWritable(x);


var y = Object.create(x);
checkNotWritable(y);
checkNotWritable(Object.create(y));

