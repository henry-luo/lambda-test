

/*---
info: |
    Since a function is an object, it might be set to [[Prototype]] property
    of a new created object through [[Construct]] property
es5id: 13.2.2_A1_T1
description: Declaring a function with "function __func()"
---*/

var __MONSTER="monster";
var __PREDATOR="predator";

function __PROTO(){};

try{
    __PROTO.type=__MONSTER;
}
catch(e){
    throw new Test262Error('#0: __PROTO.type=__MONSTER does not lead to throwing exception')
}

function __FACTORY(){};

__FACTORY.prototype=__PROTO;

var __monster = new __FACTORY();


if (!(__PROTO.isPrototypeOf(__monster))) {
	throw new Test262Error('#1: __PROTO.isPrototypeOf(__monster) must be true');
}


if (__monster.type !==__MONSTER) {
	throw new Test262Error('#2: __monster.type ===__MONSTER. Actual: __monster.type ==='+__monster.type);
}

