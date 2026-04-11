

/*---
esid: sec-function.prototype.tostring
description: Function.prototype.toString on an async generator declaration
features: [async-iteration]
includes: [nativeFunctionMatcher.js]
---*/

async  function  *  f  (  x  ,  y  )  {  ;  ;  }

assertToStringOrNativeFunction(f, "async /* a */ function /* b */ * /* c */ f /* d */ ( /* e */ x /* f */ , /* g */ y /* h */ ) /* i */ { /* j */ ; /* k */ ; /* l */ }");
