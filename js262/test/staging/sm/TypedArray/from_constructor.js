

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-TypedArray-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
for (var constructor of anyTypedArrayConstructors) {
    
    
    constructor.from.call(function(len){
        assert.sameValue(len, 3);
        return new constructor(len);
    }, Array(3));

    
    var arr = [3, 4, 5];
    var nonconstructors = [
        {}, Math, Object.getPrototypeOf, undefined, 17,
        () => ({})  
    ];
    for (var v of nonconstructors) {
        assertThrowsInstanceOf(() => {
            constructor.from.call(v, arr);
        }, TypeError);
    }

    
    function NotArray(...rest) {
        return new constructor(...rest);
    }
    var RealArray = constructor;
    NotArray.from = constructor.from;
    this[constructor.name] = NotArray;
    assert.sameValue(RealArray.from([1]) instanceof RealArray, true);
    assert.sameValue(NotArray.from([1]) instanceof RealArray, true);
    this[constructor.name] = RealArray;
}

