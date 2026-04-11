

/*---
esid: sec-class-definitions-runtime-semantics-evaluation
description: Function.prototype.toString on a class expression (explicit constructor)
includes: [nativeFunctionMatcher.js]
---*/

let A = class  A  extends  B  {  constructor  (  )  {  ;  }  m  (  )  {  }  };

assertToStringOrNativeFunction(A, "class /* a */ A /* b */ extends /* c */ B /* d */ { /* e */ constructor /* f */ ( /* g */ ) /* h */ { /* i */ ; /* j */ } /* k */ m /* l */ ( /* m */ ) /* n */ { /* o */ } /* p */ }");

function B(){}
