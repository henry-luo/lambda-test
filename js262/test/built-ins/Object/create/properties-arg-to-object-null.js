

/*---
esid: sec-object.create
description: >
  Throws a TypeError if the Properties argument is null
info: |
  Object.create ( O, Properties )

  3. If Properties is not undefined, then
    a. Return ? ObjectDefineProperties(obj, Properties).

  Runtime Semantics: ObjectDefineProperties ( O, Properties )

  2. Let props be ? ToObject(Properties).
---*/

assert.throws(TypeError, function() {
  Object.create({}, null);
});
