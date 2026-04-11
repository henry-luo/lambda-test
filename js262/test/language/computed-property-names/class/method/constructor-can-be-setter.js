

/*---
es6id: 14.5.3
description: >
    computed property setter names can be called "constructor"
---*/
class C4 {
  set ['constructor'](_) {}
}
