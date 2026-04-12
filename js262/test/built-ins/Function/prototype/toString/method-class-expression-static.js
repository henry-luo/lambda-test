

/*---
esid: sec-runtime-semantics-definemethod
description: Function.prototype.toString on a method (class; static)
includes: [nativeFunctionMatcher.js]
---*/

let x = "h";
let f = class { static f  (  )  {  } }.f;
let g = class { static [  "g"  ]  (  )  {  } }.g;
let h = class { static [  x  ]  (  )  {  } }.h;

assertToStringOrNativeFunction(f, "f /* a */ ( /* b */ ) /* c */ { /* d */ }");
assertToStringOrNativeFunction(g, "[ /* a */ \"g\" /* b */ ] /* c */ ( /* d */ ) /* e */ { /* f */ }");
assertToStringOrNativeFunction(h, "[ /* a */ x /* b */ ] /* c */ ( /* d */ ) /* e */ { /* f */ }");
