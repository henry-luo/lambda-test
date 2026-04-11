

/*---
description: Declare "arguments" and assign to it in direct eval code (Declare |arguments| when the function body contains an |arguments| var-binding.)
esid: sec-evaldeclarationinstantiation
flags: [generated, noStrict]
---*/

const oldArguments = globalThis.arguments;
let count = 0;
const f = (p = eval("var arguments = 'param'"), q = () => arguments) => {
  var arguments = "local";
  assert.sameValue(arguments, "local");
  assert.sameValue(q(), "param");
  count++;
}
f();
assert.sameValue(count, 1);
assert.sameValue(globalThis.arguments, oldArguments, "globalThis.arguments unchanged");
