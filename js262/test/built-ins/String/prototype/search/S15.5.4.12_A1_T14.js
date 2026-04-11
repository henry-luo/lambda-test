

/*---
info: String.prototype.search (regexp)
es5id: 15.5.4.12_A1_T14
description: Instance is string, argument is regular expression
---*/

var __reg = new RegExp("77");


if ("ABB\u0041BABAB\u0037\u0037BBAA".search(__reg) !== 9) {
  throw new Test262Error('#1: var __reg = new RegExp("77"); "ABB\\u0041BABAB\\u0037\\u0037BBAA".search(__reg) === 9. Actual: ' + ("ABB\u0041BABAB\u0037\u0037BBAA".search(__reg)));
}

