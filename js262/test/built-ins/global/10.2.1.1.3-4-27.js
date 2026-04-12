

/*---
es5id: 10.2.1.1.3-4-27-s
description: >
  TypeError is not thrown when changing the value of the Constructor Properties
  of the Global Object (Number)
---*/

var numBak = Number;
try {
  Number = 12;
} finally {
  Number = numBak;
}
