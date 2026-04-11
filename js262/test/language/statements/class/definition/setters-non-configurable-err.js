

/*---
esid: sec-method-definitions-runtime-semantics-propertydefinitionevaluation
es6id: 14.3.9
description: Failure to define property for static method
info: |
  [...]
  8. Let desc be the PropertyDescriptor{[[Set]]: closure, [[Enumerable]]:
     enumerable, [[Configurable]]: true}.
  9. Return ? DefinePropertyOrThrow(object, propKey, desc). 
features: [generators]
---*/

assert.throws(TypeError, function() {
  class C { static set ['prototype'](_) {} }
});
