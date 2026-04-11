

/*---
info: String.prototype.slice (start, end)
es5id: 15.5.4.13_A1_T14
description: Used one argument, that is function(){}(). Instance is string
---*/


if ("report".slice(function() {}()) !== "report") {
  throw new Test262Error('#1: "report".slice(function(){}()) === "report". Actual: ' + "report".slice(function() {}()));
}

