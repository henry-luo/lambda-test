

/*---
es6id: 13.3.1.4
description: Assignment of function `name` attribute (FunctionExpression)
info: |
    LexicalBinding : BindingIdentifier Initializer

    [...]
    6. If IsAnonymousFunctionDefinition(Initializer) is true, then
       a. Let hasNameProperty be HasOwnProperty(value, "name").
       b. ReturnIfAbrupt(hasNameProperty).
       c. If hasNameProperty is false, perform SetFunctionName(value,
          bindingId).
includes: [propertyHelper.js]
---*/

const xFn = function x() {};
const fn = function() {};

assert(xFn.name !== 'xFn');

verifyProperty(fn, 'name', {
  value: 'fn',
  writable: false,
  enumerable: false,
  configurable: true,
});
