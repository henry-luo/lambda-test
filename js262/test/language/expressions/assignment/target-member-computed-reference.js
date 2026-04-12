

/*---
esid: sec-assignment-operators
description: Assignment Operator evaluates its operands from left to right (formerly S11.13.1_A7_T3)
info: |
  The left-hand side expression is evaluated before the right-hand side.
  Left-hand side expression is MemberExpression: base[prop].
  ToPropertyKey(prop) occurs after both sides are evaluated.
---*/

function DummyError() { }

assert.throws(DummyError, function() {
  var base = {};
  var prop = function() {
    throw new DummyError();
  };
  var expr = function() {
    throw new Test262Error("right-hand side expression evaluated");
  };

  base[prop()] = expr();
});

assert.throws(DummyError, function() {
  var base = {};
  var prop = {
    toString: function() {
      throw new Test262Error("property key evaluated");
    }
  };
  var expr = function() {
    throw new DummyError();
  };

  base[prop] = expr();
});
