

/*---
esid: sec-functiondeclarationinstantiation
es6id: 9.2.12
description: >
  Arguments are "unmapped" when paramater list is non-simple due to
  destructuring pattern
info: |
  [...]
  9. Let simpleParameterList be IsSimpleParameterList of formals.
  [...]
  22. If argumentsObjectNeeded is true, then
      a. If strict is true or if simpleParameterList is false, then
         i. Let ao be CreateUnmappedArgumentsObject(argumentsList).
      [...]
---*/

var value;

function dstr(a, [b]) {
  arguments[0] = 2;
  value = a;
}

dstr(1, []);

assert.sameValue(value, 1);
