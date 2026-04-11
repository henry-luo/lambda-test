

/*---
es6id: 14.5.1
description: >
    No restrictions on SuperProperty
---*/
class A {
  constructor() {
    super.toString();
  }
  dontDoThis() {
    super.makeBugs = 1;
  }
}


assert.sameValue(typeof A, "function");

var a = new A();

a.dontDoThis();
assert.sameValue(a.makeBugs, 1);
