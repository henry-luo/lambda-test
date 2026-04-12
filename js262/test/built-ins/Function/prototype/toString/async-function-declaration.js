

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: sec-function.prototype.tostring
description: Function.prototype.toString on an async function declaration
features: [async-functions]
includes: [nativeFunctionMatcher.js]
---*/

async function  f  (  x  ,  y  )  {  ;  ;  }

assertToStringOrNativeFunction(f, "async function /* a */ f /* b */ ( /* c */ x /* d */ , /* e */ y /* f */ ) /* g */ { /* h */ ; /* i */ ; /* j */ }");
