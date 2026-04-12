

/*---
info: String.prototype.indexOf(searchString, position)
es5id: 15.5.4.7_A1_T12
description: Argument is string, and instance is array of strings
---*/

var __instance = new Array('new', 'zoo', 'revue');


if (__instance.indexOf('new') !== 0) {
  throw new Test262Error('#1: __instance = new Array(\'new\',\'zoo\',\'revue\'); __instance.indexOf(\'new\') === 0. Actual: ' + __instance.indexOf('new'));
}


if (__instance.indexOf('zoo') !== 1) {
  throw new Test262Error('#2: __instance = new Array(\'new\',\'zoo\',\'revue\'); __instance.indexOf(\'zoo\') === 1. Actual: ' + __instance.indexOf('zoo'));
}

