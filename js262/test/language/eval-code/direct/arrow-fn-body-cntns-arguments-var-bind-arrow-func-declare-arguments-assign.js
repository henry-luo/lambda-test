

/*---
description: Declare "arguments" and assign to it in direct eval code (Declare |arguments| when the function body contains an |arguments| var-binding.)
esid: sec-evaldeclarationinstantiation
flags: [generated, noStrict]
---*/

const oldArguments = globalThis.arguments;
let count = 0;
const f = (p = eval("var arguments = 'param'")) => {
  var arguments = "local";
  assert.sameValue(arguments, "local");
  
  count++;
}
f();
assert.sameValue(count, 1);
assert.sameValue(globalThis.arguments, oldArguments, "globalThis.arguments unchanged");
