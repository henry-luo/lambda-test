

/*---
info: |
    Being in anonymous code, "this" and eval("this"), called as a
    constructor, return the object
es5id: 11.1.1_A4.2
description: >
    Creating function by using new Function() constructor. It has the
    property, which returns "this"
---*/


var MyFunction = new Function("this.THIS = this");
var MyObject = new MyFunction();
if (MyObject.THIS.toString() !== "[object Object]") {
  throw new Test262Error('#1: var MyFunction = new Function("this.THIS = this"); var MyObject = new MyFunction(); MyObject.THIS.toString() === "[object Object]". Actual: ' + (MyObject.THIS.toString()));
}


MyFunction = new Function("this.THIS = eval(\'this\')");
MyObject = new MyFunction();
if (MyObject.THIS.toString() !== "[object Object]") {
  throw new Test262Error('#2: var MyFunction = new Function("this.THIS = eval(\'this\')"); var MyObject = new MyFunction(); MyObject.THIS.toString() === "[object Object]". Actual: ' + (MyObject.THIS.toString()));
}
