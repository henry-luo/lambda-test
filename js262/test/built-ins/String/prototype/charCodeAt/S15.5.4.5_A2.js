

/*---
info: |
    When String.prototype.charCodeAt(pos) calls if ToInteger(pos) less than 0
    the NaN returns
es5id: 15.5.4.5_A2
description: Call charCodeAt(pos) with negative pos
---*/

function __FACTORY() {};

__FACTORY.prototype.charCodeAt = String.prototype.charCodeAt;

var __instance = new __FACTORY;

assert.sameValue(__instance.charCodeAt(-1), NaN);
