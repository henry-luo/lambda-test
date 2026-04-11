

/*---
esid: sec-method-definitions-runtime-semantics-propertydefinitionevaluation
description: Function.prototype.toString on a setter (class; static)
includes: [nativeFunctionMatcher.js]
---*/

let x = "h";
let f = Object.getOwnPropertyDescriptor(class { static set  f  (  a  )  {  } }, "f").set;
let g = Object.getOwnPropertyDescriptor(class { static set  [  "g"  ]  (  a  )  {  } }, "g").set;
let h = Object.getOwnPropertyDescriptor(class { static set  [  x  ]  (  a  )  {  } }, "h").set;

assertToStringOrNativeFunction(f, "set /* a */ f /* b */ ( /* c */ a /* d */ ) /* e */ { /* f */ }");
assertToStringOrNativeFunction(g, "set /* a */ [ /* b */ \"g\" /* c */ ] /* d */ ( /* e */ a /* f */ ) /* g */ { /* h */ }");
assertToStringOrNativeFunction(h, "set /* a */ [ /* b */ x /* c */ ] /* d */ ( /* e */ a /* f */ ) /* g */ { /* h */ }");
