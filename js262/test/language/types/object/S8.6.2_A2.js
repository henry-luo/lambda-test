

/*---
info: |
    Properties of the [[Prototype]] object
    are visible as properties of the child object for the purposes of get access, but not for put access
es5id: 8.6.2_A2
description: >
    Check visibility properties of the child object for the purposes
    of get access, but not for put access
---*/


function FooObj(){};
FooObj.prototype.prop="some";


var foo= new FooObj;


if (foo.prop !== "some"){
  throw new Test262Error('#1: function FooObj(){}; FooObj.prototype.prop="some"; var foo= new FooObj; foo.prop === "some". Actual: ' + (foo.prop));
}


foo.prop=true;

var foo__ = new FooObj;
if (foo__.prop !== "some"){
  throw new Test262Error('#2: function FooObj(){}; FooObj.prototype.prop="some"; var foo= new FooObj; foo.prop=true; var foo__ = new FooObj; foo__.prop === "some". Actual: ' + (foo__.prop));
}

