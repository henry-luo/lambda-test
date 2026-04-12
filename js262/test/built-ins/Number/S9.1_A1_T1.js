

/*---
info: |
    Result of primitive conversion from object is a default value for the
    Object
es5id: 9.1_A1_T1
description: >
    Using operator Number. The operator calls ToPrimitive with hint
    Number
---*/


var object = {
  valueOf: function() {
    return "1"
  },
  toString: function() {
    return 0
  }
};

assert.sameValue(
  Number(object),
  1,
  'Number({valueOf: function() {return "1"}, toString: function() {return 0}}) must return 1'
);


var object = {
  valueOf: function() {
    return {}
  },
  toString: function() {
    return "0"
  }
};

assert.sameValue(
  Number(object),
  0,
  'Number({valueOf: function() {return {}}, toString: function() {return "0"}}) must return 0'
);
