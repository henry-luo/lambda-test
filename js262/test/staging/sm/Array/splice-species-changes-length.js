

/*---
includes: [sm/non262.js, sm/non262-shell.js, compareArray.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

{
    let array = [];
    array.push(0, 1, 2);

    array.constructor = {
        [Symbol.species]: function(n) {
            
            array.push(3, 4, 5);

            
            Object.defineProperty(array, "length", {writable: false});

            return new Array(n);
        }
    }

    assertThrowsInstanceOf(() => Array.prototype.splice.call(array, 0, 1), TypeError);

    assert.sameValue(array.length, 6);
    assert.compareArray(array, [1, 2, , 3, 4, 5]);
}


{
    let array = [];
    array.push(0, 1, 2);

    array.constructor = {
        [Symbol.species]: function(n) {
            
            array.push(3, 4, 5);

            
            Object.defineProperty(array, "length", {writable: false});

            return new Array(n);
        }
    }

    assertThrowsInstanceOf(() => Array.prototype.splice.call(array, 0, 0, 123), TypeError);

    assert.sameValue(array.length, 6);
    assert.compareArray(array, [123, 0, 1, 2, 4, 5]);
}

