

/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
    Tests that the Intl.NumberFormat.prototype.formatRange function meets the
    requirements for built-in objects defined by the ECMAScript Language
    Specification.
includes: [isConstructor.js]
features: [Reflect.construct,Intl.NumberFormat-v3]
---*/

const formatRange = Intl.NumberFormat.prototype.formatRange;

assert.sameValue(Object.prototype.toString.call(formatRange), "[object Function]",
                 "The [[Class]] internal property of a built-in function must be " +
                 "\"Function\".");

assert(Object.isExtensible(formatRange),
       "Built-in objects must be extensible.");

assert.sameValue(Object.getPrototypeOf(formatRange), Function.prototype);

assert.sameValue(formatRange.hasOwnProperty("prototype"), false,
                 "Built-in functions that aren't constructors must not have a prototype property.");

assert.sameValue(isConstructor(formatRange), false,
                 "Built-in functions don't implement [[Construct]] unless explicitly specified.");
