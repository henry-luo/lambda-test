

/*---
info: String.prototype.match (regexp)
es5id: 15.5.4.10_A1_T3
description: Checking by using eval
---*/

var match = String.prototype.match.bind(this);

try {
  this.toString = Object.prototype.toString;
} catch (e) {;
}


if ((this.toString === Object.prototype.toString) && 
  (match(eval("\"bj\""))[0] !== "bj")) {
  throw new Test262Error('#1: match = String.prototype.match.bind(this); match(eval("\\"bj\\""))[0] === "bj". Actual: ' + match(eval("\"bj\""))[0]);
}

