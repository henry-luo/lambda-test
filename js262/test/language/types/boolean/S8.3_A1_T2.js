

/*---
info: The Boolean type have two values, called true and false
es5id: 8.3_A1_T2
description: Check type of true/false and its equality
---*/


if (typeof(true) !== "boolean") {
  throw new Test262Error('#1: typeof(true) === "boolean"');
}


if (typeof(true) != "boolean") {
  throw new Test262Error('#2: typeof(true) == "boolean"');
}


if (typeof(false) !== "boolean") {
  throw new Test262Error('#3: typeof(false) === "boolean"');
}


if (typeof(false) != "boolean") {
  throw new Test262Error('#4: typeof(false) == "boolean"');
}


if (true === false) {
  throw new Test262Error('#5: true !== false');
}


if (true == false) {
  throw new Test262Error('#6: true != false');
}


if (false === true) {
  throw new Test262Error('#7: false !== true');
}


if (false == true) {
  throw new Test262Error('#8: false != true');
}

