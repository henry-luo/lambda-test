

/*---
esid: sec-runtime-semantics-bindingclassdeclarationevaluation
description: Function.prototype.toString on a class declaration (explicit constructor)
includes: [nativeFunctionMatcher.js]
---*/

class  A  extends  B  {  constructor  (  )  {  ;  }  m  (  )  {  }  }

assertToStringOrNativeFunction(A, "class /* a */ A /* b */ extends /* c */ B /* d */ { /* e */ constructor /* f */ ( /* g */ ) /* h */ { /* i */ ; /* j */ } /* k */ m /* l */ ( /* m */ ) /* n */ { /* o */ } /* p */ }");

function B(){}
