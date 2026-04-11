

/*---
info: |
    Operator x >= y returns ToString(x) >= ToString(y), if Type(Primitive(x))
    is String and Type(Primitive(y)) is String
es5id: 11.8.4_A3.2_T1.2
description: >
    Type(Primitive(x)) and Type(Primitive(y)) vary between Object
    object and Function object
---*/


if (({} >= function(){return 1}) !== ({}.toString() >= function(){return 1}.toString())) {
  throw new Test262Error('#1: ({} >= function(){return 1}) === ({}.toString() >= function(){return 1}.toString())');
}


if ((function(){return 1} >= {}) !== (function(){return 1}.toString() >= {}.toString())) {
  throw new Test262Error('#2: (function(){return 1} >= {}) === (function(){return 1}.toString() >= {}.toString())');
}


if ((function(){return 1} >= function(){return 1}) !== (function(){return 1}.toString() >= function(){return 1}.toString())) {
  throw new Test262Error('#3: (function(){return 1} >= function(){return 1}) === (function(){return 1}.toString() >= function(){return 1}.toString())');
}


if (({} >= {}) !== ({}.toString() >= {}.toString())) {
  throw new Test262Error('#4: ({} >= {}) === ({}.toString() >= {}.toString())');
}
