

/*---
esid: sec-generator-function-definitions-runtime-semantics-propertydefinitionevaluation
es6id: 14.4.13
description: Failure to define property for static generator method
info: |
  [...]
  10. Let desc be the PropertyDescriptor{[[Value]]: closure, [[Writable]]:
      true, [[Enumerable]]: enumerable, [[Configurable]]: true}.
  11. Return ? DefinePropertyOrThrow(object, propKey, desc). 
features: [generators]
---*/

assert.throws(TypeError, function() {
  class C { static *['prototype']() {} }
});
