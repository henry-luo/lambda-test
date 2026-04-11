

/*---
info: String.fromCharCode () returns empty string
es5id: 15.5.3.2_A2
description: Call String.fromCharCode()
---*/


if (String.fromCharCode() !== "") {
  throw new Test262Error('#1: String.fromCharCode () returns empty string. Actual: ' + String.fromCharCode());
}

