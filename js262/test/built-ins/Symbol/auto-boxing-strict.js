

/*---
es6id: 19.4
description: >
    Symbol ToObject auto-boxing
flags: [onlyStrict]
features: [Symbol]
---*/

assert.throws(TypeError, function() {
  var sym = Symbol('66');
  sym.a = 0;
});

assert.throws(TypeError, function() {
  var sym = Symbol('66');
  sym['a' + 'b'] = 0;
});

assert.throws(TypeError, function() {
  var sym = Symbol('66');
  sym[62] = 0;
});
