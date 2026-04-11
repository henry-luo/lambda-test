

/*---
es6id: 12.2.5
description: >
    In a class, computed property names for static
    setters can be named "constructor"
---*/
class C {
  static set ['constructor'](x) {}
}
