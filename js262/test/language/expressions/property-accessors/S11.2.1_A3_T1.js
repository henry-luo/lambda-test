

/*---
info: |
    MemberExpression calls ToObject(MemberExpression) and
    ToString(Expression). CallExpression calls ToObject(CallExpression) and
    ToString(Expression)
es5id: 11.2.1_A3_T1
description: Checking Boolean case
---*/


if (true.toString() !== "true") {
  throw new Test262Error('#1: true.toString() === "true". Actual: ' + (true.toString()));
}


if (false["toString"]() !== "false") {
  throw new Test262Error('#2: false["toString"]() === "false". Actual: ' + (false["toString"]()));
}


if (new Boolean(true).toString() !== "true") {
  throw new Test262Error('#3: new Boolean(true).toString() === "true". Actual: ' + (new Boolean(true).toString()));
}


if (new Boolean(false)["toString"]() !== "false") {
  throw new Test262Error('#4: new Boolean(false)["toString"]() === "false". Actual: ' + (new Boolean(false)["toString"]()));
}
