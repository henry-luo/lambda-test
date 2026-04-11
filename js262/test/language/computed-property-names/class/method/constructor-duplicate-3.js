

/*---
es6id: 12.2.5
description: >
    computed property names can be "constructor"
---*/
class C {
  ['constructor']() {}
  ['constructor']() {}
}
