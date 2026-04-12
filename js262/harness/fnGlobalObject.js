

/*---
description: |
    Produce a reliable global object
defines: [fnGlobalObject]
---*/

var __globalObject = Function("return this;")();
function fnGlobalObject() {
  return __globalObject;
}
