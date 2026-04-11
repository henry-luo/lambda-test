

/*---
description: Rest object doesn't contain non-enumerable properties (AssignmentExpression)
esid: sec-variable-statement-runtime-semantics-evaluation
features: [object-rest, destructuring-binding]
flags: [generated]
includes: [propertyHelper.js]
info: |
    VariableDeclaration : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let rval be GetValue(rhs).
    3. ReturnIfAbrupt(rval).
    4. Return the result of performing BindingInitialization for
       BindingPattern passing rval and undefined as arguments.
---*/
var rest;
var obj = {a: 3, b: 4};
Object.defineProperty(obj, "x", { value: 4, enumerable: false });

var result;
var vals = obj;

result = {...rest} = vals;

assert.sameValue(Object.getOwnPropertyDescriptor(rest, "x"), undefined);

verifyProperty(rest, "a", {
  enumerable: true,
  writable: true,
  configurable: true,
  value: 3
});

verifyProperty(rest, "b", {
  enumerable: true,
  writable: true,
  configurable: true,
  value: 4
});

assert.sameValue(result, vals);
