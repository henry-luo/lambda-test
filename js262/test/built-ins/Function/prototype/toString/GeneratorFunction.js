

/*---
esid: sec-createdynamicfunction
description: Function.prototype.toString on a generator function created with the GeneratorFunction constructor
features: [generators]
includes: [nativeFunctionMatcher.js]
---*/

let GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor;
let g = GeneratorFunction("a", " /* a */ b, c /* b */ //", "/* c */ yield yield; /* d */ //");

assertToStringOrNativeFunction(g, "function* anonymous(a, /* a */ b, c /* b */ //\n) {\n/* c */ yield yield; /* d */ //\n}");
