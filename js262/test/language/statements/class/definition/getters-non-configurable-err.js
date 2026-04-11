

/*---
esid: sec-method-definitions-runtime-semantics-propertydefinitionevaluation
es6id: 14.3.9
description: Failure to define property for static method
info: |
  [...]
  9. Let desc be the PropertyDescriptor{[[Get]]: closure, [[Enumerable]]:
     enumerable, [[Configurable]]: true}.
  10. Return ? DefinePropertyOrThrow(object, propKey, desc). 
features: [generators]
---*/

assert.throws(TypeError, function() {
  class C { static get ['prototype']() {} }
});
