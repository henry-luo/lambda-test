

/*---
info: Operator x++ evaluates its reference expression once.
description: >
    The operand expression is evaluated exactly once. Operand expression is
    MemberExpression: base[prop]. ToPropertyKey(prop) is not called multiple
    times.
---*/

var propKeyEvaluated = false;
var base = {};
var prop = {
  toString: function() {
    assert(!propKeyEvaluated);
    propKeyEvaluated = true;
    return 1;
  }
};

base[prop]++;
