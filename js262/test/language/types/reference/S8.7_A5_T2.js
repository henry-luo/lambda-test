

/*---
info: Delete unary operator can't delete object to be referenced
es5id: 8.7_A5_T2
description: Delete referenced object, __ref = obj
flags: [noStrict]
---*/


if (typeof(__ref) !== "undefined"){
    throw new Test262Error('#1: typeof(__ref) === "undefined". Actual: ' + (typeof(__ref)));
};


var obj = new Object();
__ref = obj;


if (typeof(__ref) === "undefined"){
    throw new Test262Error('#2: obj = new Object(); __ref = obj; typeof(__ref) !== "undefined"');
};


if (delete __ref !== true){
    throw new Test262Error('#3: obj = new Object(); __ref = obj; delete __ref === true. Actual: ' + (delete __ref));
};


if (typeof(__ref) !== "undefined"){
    throw new Test262Error('#4: obj = new Object(); __ref = obj; delete __ref; typeof(__ref) === "undefined". Actual: ' + (typeof(__ref)));
};


if (typeof(obj) !== "object"){
    throw new Test262Error('#5: obj = new Object(); __ref = obj; delete __ref; typeof(obj) === "object". Actual: ' + (typeof(obj)));
};

