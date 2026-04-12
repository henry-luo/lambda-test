

/*---
esid: sec-additional-properties-of-the-object.prototype-object
description: Behavior when "this" value is not extensible
info: |
    [...]
    5. Perform ? DefinePropertyOrThrow(O, key, desc).
features: [__setter__]
---*/

var noop = function() {};
var subject = Object.preventExtensions({ existing: null });

subject.__defineSetter__('existing', noop);

assert.throws(TypeError, function() {
  subject.__defineSetter__('brand new', noop);
});
