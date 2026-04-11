

/*---
esid: sec-runtime-semantics-definemethod
description: Function.prototype.toString on a method (class)
includes: [nativeFunctionMatcher.js]
---*/

let x = "h";
let f = class { f  (  )  {  } }.prototype.f;
let g = class { [  "g"  ]  (  )  {  } }.prototype.g;
let h = class { [  x  ]  (  )  {  } }.prototype.h;

assertToStringOrNativeFunction(f, "f /* a */ ( /* b */ ) /* c */ { /* d */ }");
assertToStringOrNativeFunction(g, "[ /* a */ \"g\" /* b */ ] /* c */ ( /* d */ ) /* e */ { /* f */ }");
assertToStringOrNativeFunction(h, "[ /* a */ x /* b */ ] /* c */ ( /* d */ ) /* e */ { /* f */ }");
