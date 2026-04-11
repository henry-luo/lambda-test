

/*---
description: right-shift operator ToNumeric with BigInt operands
esid: sec-signed-right-shift-operator-runtime-semantics-evaluation
features: [BigInt, Symbol, Symbol.toPrimitive, computed-property-names]
---*/
assert.throws(TypeError, function() {
  Symbol('1') >> 0n;
}, 'Symbol("1") >> 0n throws TypeError');

assert.throws(TypeError, function() {
  0n >> Symbol('1');
}, '0n >> Symbol("1") throws TypeError');

assert.throws(TypeError, function() {
  Object(Symbol('1')) >> 0n;
}, 'Object(Symbol("1")) >> 0n throws TypeError');

assert.throws(TypeError, function() {
  0n >> Object(Symbol('1'));
}, '0n >> Object(Symbol("1")) throws TypeError');

assert.throws(TypeError, function() {
  ({
    [Symbol.toPrimitive]: function() {
      return Symbol('1');
    }
  }) >> 0n;
}, '({[Symbol.toPrimitive]: function() {return Symbol("1");}}) >> 0n throws TypeError');

assert.throws(TypeError, function() {
  0n >> {
    [Symbol.toPrimitive]: function() {
      return Symbol('1');
    }
  };
}, '0n >> {[Symbol.toPrimitive]: function() {return Symbol("1");}} throws TypeError');

assert.throws(TypeError, function() {
  ({
    valueOf: function() {
      return Symbol('1');
    }
  }) >> 0n;
}, '({valueOf: function() {return Symbol("1");}}) >> 0n throws TypeError');

assert.throws(TypeError, function() {
  0n >> {
    valueOf: function() {
      return Symbol('1');
    }
  };
}, '0n >> {valueOf: function() {return Symbol("1");}} throws TypeError');

assert.throws(TypeError, function() {
  ({
    toString: function() {
      return Symbol('1');
    }
  }) >> 0n;
}, '({toString: function() {return Symbol("1");}}) >> 0n throws TypeError');

assert.throws(TypeError, function() {
  0n >> {
    toString: function() {
      return Symbol('1');
    }
  };
}, '0n >> {toString: function() {return Symbol("1");}} throws TypeError');
