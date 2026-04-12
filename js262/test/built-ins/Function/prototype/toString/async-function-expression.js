

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: sec-function.prototype.tostring
description: Function.prototype.toString on an async function expression
features: [async-functions]
includes: [nativeFunctionMatcher.js]
---*/

let f = async function  F  (  x  ,  y  )  {  ;  ;  };
let g = async function  (  x  ,  y  )  {  ;  ;  };

assertToStringOrNativeFunction(f, "async function /* a */ F /* b */ ( /* c */ x /* d */ , /* e */ y /* f */ ) /* g */ { /* h */ ; /* i */ ; /* j */ }");
assertToStringOrNativeFunction(g, "async function /* a */ ( /* b */ x /* c */ , /* d */ y /* e */ ) /* f */ { /* g */ ; /* h */ ; /* i */ }");
