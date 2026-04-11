

/*---
esid: sec-function.prototype.tostring
description: Function.prototype.toString on an async generator expression
features: [async-iteration]
includes: [nativeFunctionMatcher.js]
---*/

let f = async  function  *  F  (  x  ,  y  )  {  ;  ;  };
let g = async  function  *  (  x  ,  y  )  {  ;  ;  };

assertToStringOrNativeFunction(f, "async /* a */ function /* b */ * /* c */ F /* d */ ( /* e */ x /* f */ , /* g */ y /* h */ ) /* i */ { /* j */ ; /* k */ ; /* l */ }");
assertToStringOrNativeFunction(g, "async /* a */ function /* b */ * /* c */ ( /* d */ x /* e */ , /* f */ y /* g */ ) /* h */ { /* i */ ; /* j */ ; /* k */ }");
