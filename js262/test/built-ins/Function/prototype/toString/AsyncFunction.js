

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: sec-function.prototype.tostring
description: >
  Function.prototype.toString on an async function created with the
  AsyncFunction constructor.
features: [async-functions]
includes: [nativeFunctionMatcher.js]
---*/
async function f() {}
var AsyncFunction = f.constructor;
var g = AsyncFunction("a", " /* a */ b, c /* b */ //", "/* c */ ; /* d */ //"); 
assertToStringOrNativeFunction(g, "async function anonymous(a, /* a */ b, c /* b */ //\n) {\n/* c */ ; /* d */ //\n}");
