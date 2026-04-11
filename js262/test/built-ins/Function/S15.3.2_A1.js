

/*---
info: |
    When Function is called as part of a new expression, it is a constructor:
    it initialises the newly created object
es5id: 15.3.2_A1
description: >
    Checking the constuctor of the object that is created as a new
    Function
---*/

var f = new Function;

assert.sameValue(f.constructor, Function, 'The value of f.constructor is expected to equal the value of Function');
assert.notSameValue(f, undefined, 'The value of f is expected to not equal ``undefined``');
