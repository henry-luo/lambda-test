

/*---
info: String.prototype.replace (searchValue, replaceValue)
es5id: 15.5.4.11_A1_T4
description: >
    Call replace (searchValue, replaceValue) function with null and
    function(a1,a2,a3){return a2+"";} arguments of function object
---*/


if (function() {
    return "gnulluna"
  }().replace(null, function(a1, a2, a3) {
    return a2 + "";
  }) !== "g1una") {
  throw new Test262Error('#1: function(){return "gnulluna"}().replace(null,function(a1,a2,a3){return a2+"";}) === "g1una". Actual: ' + function() {
    return "gnulluna"
  }().replace(null, function(a1, a2, a3) {
    return a2 + "";
  }));
}

