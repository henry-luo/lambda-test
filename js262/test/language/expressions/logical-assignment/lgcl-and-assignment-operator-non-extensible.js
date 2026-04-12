

/*---
esid: sec-assignment-operators-runtime-semantics-evaluation
description: >
    Strict Mode - TypeError is not thrown if The LeftHandSide of a Logical
    Assignment operator(&&=) is a reference to a non-existent property of an
    object whose [[Extensible]] internal property is false.
flags: [onlyStrict]
features: [logical-assignment-operators]

---*/

var obj = {};
Object.preventExtensions(obj);

obj.prop &&= 1;
assert.sameValue(obj.prop, undefined, "obj.prop");
