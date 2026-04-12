

/*---
description: >
  ToInteger(start) is called before ToInteger(end).
info: |
  SharedArrayBuffer.prototype.slice ( start, end )

features: [SharedArrayBuffer]
---*/

var arrayBuffer = new SharedArrayBuffer(8);

var log = "";
var start = {
  valueOf: function() {
    log += "start-";
    return 0;
  }
};
var end = {
  valueOf: function() {
    log += "end";
    return 8;
  }
};

arrayBuffer.slice(start, end);
assert.sameValue(log, "start-end");
