

/*---
es5id: 15.2.3.4-4-41
description: >
    Object.getOwnPropertyNames - inherited accessor property of String
    object 'O' is not pushed into the returned array
---*/

var str = new String("abc");

Object.defineProperty(String.prototype, "protoProperty", {
  get: function() {
    return "protoString";
  },
  configurable: true
});

var result = Object.getOwnPropertyNames(str);

for (var p in result) {
  assert.notSameValue(result[p], "protoProperty", 'result[p]');
}
