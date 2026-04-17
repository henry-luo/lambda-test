

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-TypedArray-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
if (typeof $262.detachArrayBuffer === "function") {
    const originalNumberToLocaleString = Number.prototype.toLocaleString;

    
    for (let constructor of typedArrayConstructors) {
        let typedArray = new constructor(42);
        $262.detachArrayBuffer(typedArray.buffer);
        assertThrowsInstanceOf(() => typedArray.toLocaleString(), TypeError);
    }

    
    for (let constructor of typedArrayConstructors) {
        Number.prototype.toLocaleString = function() {
            "use strict";
            if (!detached) {
                $262.detachArrayBuffer(typedArray.buffer);
                detached = true;
            }
            return this;
        };

        
        let detached = false;
        let typedArray = new constructor(1);
        assert.sameValue(typedArray.toLocaleString(), "0");
        assert.sameValue(detached, true);

        
        detached = false;
        typedArray = new constructor(2);
        assert.sameValue(typedArray.toLocaleString(), "0,");
        assert.sameValue(detached, true);
    }
    Number.prototype.toLocaleString = originalNumberToLocaleString;
}

