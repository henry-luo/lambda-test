

/*---
info: Function's scope chain is started when it is declared
es5id: 13.2.2_A19_T7
description: Function is declared in the object scope as a variable
flags: [noStrict]
---*/

var a = 1;

var __obj = {a:2};

with (__obj)
{
    var __func = function()
    {
        return a;
    }
}


if (__obj.hasOwnProperty('__func')) {
	throw new Test262Error('#1: __obj.hasOwnProperty(\'__func\') === false');
}


if (!(this.hasOwnProperty('__func'))) {
	throw new Test262Error('#2: this.hasOwnProperty(\'__func\') === true');
}


if (__func in __obj) {
	throw new Test262Error('#3: (__func in __obj) === false');
}


if (this.__func === undefined) {
	throw new Test262Error('#4: this.__func !== undefined');
}

