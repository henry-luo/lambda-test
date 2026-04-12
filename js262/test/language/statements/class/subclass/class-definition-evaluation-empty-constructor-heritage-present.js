

/*---
es6id: 14.5.14
description: >
    10. If constructor is empty, then,
      a. If ClassHeritageopt is present, then
        i. Let constructor be the result of parsing the String "constructor(... args){ super (...args);}" using the syntactic grammar with the goal symbol MethodDefinition.
---*/
var args;

class A {
  constructor() {
    args = arguments;
  }
}

class B extends A {
  

}

new B(0, 1, 2);


assert.sameValue(args[0], 0);
assert.sameValue(args[1], 1);
assert.sameValue(args[2], 2);

