

/*---
esid: sec-createdynamicfunction
description: Function.prototype.toString on a function created with the Function constructor
includes: [nativeFunctionMatcher.js]
---*/

let f = Function("a", " /* a */ b, c /* b */ //", "/* c */ ; /* d */ //");

assertToStringOrNativeFunction(f, "function anonymous(a, /* a */ b, c /* b */ //\n) {\n/* c */ ; /* d */ //\n}");
