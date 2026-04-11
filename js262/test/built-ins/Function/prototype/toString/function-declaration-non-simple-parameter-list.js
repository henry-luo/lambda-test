

/*---
esid: sec-function-definitions-runtime-semantics-instantiatefunctionobject
description: Function.prototype.toString on a function with a non-simple parameter list
includes: [nativeFunctionMatcher.js]
---*/

function  f  (  a  =  0  ,  {  b  =  0  }  )  {  }

assertToStringOrNativeFunction(f, "function /* a */ f /* b */ ( /* c */ a /* d */ = /* e */ 0 /* f */ , /* g */ { /* h */ b /* i */ = /* j */ 0 /* k */ } /* l */ ) /* m */ { /* n */ }");
