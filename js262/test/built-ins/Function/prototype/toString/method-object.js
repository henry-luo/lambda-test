

/*---
esid: sec-runtime-semantics-definemethod
description: Function.prototype.toString on a method (object)
includes: [nativeFunctionMatcher.js]
---*/

let f = { f  (  )  {  } }.f;

assertToStringOrNativeFunction(f, "f /* a */ ( /* b */ ) /* c */ { /* d */ }");
