

/*---
es5id: 10.2.1.1.3-4-22-s
description: >
  TypeError is not thrown when changing the value of the Constructor Properties
  of the Global Object
---*/

var objBak = Object;

try {
  Object = 12;
} finally {
  Object = objBak;
}
