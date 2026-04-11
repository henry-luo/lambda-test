

/*---
esid: sec-function.prototype.tostring
description: Function.prototype.toString on an async method
features: [async-functions]
includes: [nativeFunctionMatcher.js]
---*/

let x = "h";
let f = class { async f  (  )  {  } }.prototype.f;
let g = class { async  [  "g"  ]  (  )  {  } }.prototype.g;
let h = class { async  [  x  ]  (  )  {  } }.prototype.h;

assertToStringOrNativeFunction(f, "async f /* a */ ( /* b */ ) /* c */ { /* d */ }");
assertToStringOrNativeFunction(g, "async /* a */ [ /* b */ \"g\" /* c */ ] /* d */ ( /* e */ ) /* f */ { /* g */ }");
assertToStringOrNativeFunction(h, "async /* a */ [ /* b */ x /* c */ ] /* d */ ( /* e */ ) /* f */ { /* g */ }");
