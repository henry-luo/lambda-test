

/*---
info: |
    [[Get]](P) method should return value when property P does not exist in
    instance but prototype contain it
es5id: 8.12.3_A1
description: >
    Try to get P when property P does not exist in instance but
    prototype contain it
---*/


function FooObj(){}; FooObj.prototype.propFoo="some";


var __obj= new FooObj;


if (__obj.propFoo !== "some"){
  throw new Test262Error('#1: function FooObj(){}; FooObj.prototype.propFoo="some"; var __obj= new FooObj; __obj.propFoo === "some". Actual: ' + (__obj.propFoo));
}


if (__obj['propFoo'] !== "some"){
  throw new Test262Error('#1: function FooObj(){}; FooObj.prototype.propFoo="some"; var __obj= new FooObj; __obj[\'propFoo\'] === "some". Actual: ' + (__obj['propFoo']));
}

