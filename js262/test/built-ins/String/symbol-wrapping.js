

/*---
esid: sec-string-constructor
description: Symbol value may not be wrapped
info: |
    1. If no arguments were passed to this function invocation, let s be "".
    2. Else,
       a. If NewTarget is undefined and Type(value) is Symbol, return
          SymbolDescriptiveString(value).
       b. Let s be ? ToString(value).
features: [Symbol]
---*/

var s = Symbol('66');

assert.throws(TypeError, function() {
  new String(s);
});
