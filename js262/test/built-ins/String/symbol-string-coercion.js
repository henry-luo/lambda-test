

/*---
esid: sec-string-constructor
description: Symbol value may be coerced to a String
info: |
    1. If no arguments were passed to this function invocation, let s be "".
    2. Else,
       a. If NewTarget is undefined and Type(value) is Symbol, return
          SymbolDescriptiveString(value).
features: [Symbol]
---*/

assert.sameValue(String(Symbol('66')), 'Symbol(66)');
assert.sameValue(String(Symbol()), 'Symbol()', 'implicit `undefined`');
assert.sameValue(
  String(Symbol(undefined)), 'Symbol()', 'explicit `undefined`'
);
