

/*---
info: |
    Assume F is a Function object. When the [[HasInstance]] method of F is
    called with value V, the following steps are taken: i) If V is not an
    object, return false
es5id: 15.3.5.3_A1_T8
description: V is undefined variable
---*/

var FACTORY;
FACTORY = Function("name","this.name=name;");


if ((x instanceof  FACTORY)!==false) {
  throw new Test262Error('#1: Assume F is a Function object. When the [[HasInstance]] method of F is called with value V, the following steps are taken: i) If V is not an object, return false');
}

var x;
