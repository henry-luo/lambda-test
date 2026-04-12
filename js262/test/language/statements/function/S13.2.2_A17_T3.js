

/*---
info: FunctionExpression containing "with" statement is admitted
es5id: 13.2.2_A17_T3
description: >
    In the check 4 we populate field getRight in __obj object since
    var getRight declaration adds variable to function scope  but
    getRight in statement resolves within with(__obj) scope and
    searchs getRight in __obj first
flags: [noStrict]
---*/

p1="alert";

this.__obj={p1:1,getRight:function(){return "right";}};

var getRight=function(){return "napravo";};

resukt=(function(){
    with(__obj){
        p1="w1";
        var getRight=function(){return false;};
        return p1;
    }
})();


if (p1!=="alert") {
	throw new Test262Error('#1: p1 === "alert". Actual: p1==='+p1);
}


if (getRight()!=="napravo") {
	throw new Test262Error('#2: getRight() === "napravo". Actual: getRight()==='+getRight());
}


if (__obj.p1!=="w1") {
	throw new Test262Error('#3: __obj.p1 === "w1". Actual: __obj.p1 ==='+__obj.p1);
}


if (__obj.getRight()!==false) {
	throw new Test262Error('#4: __obj.getRight() === false. Actual: __obj.getRight()==='+__obj.getRight());
}


if (resukt !== "w1") {
	throw new Test262Error('#5: resukt === "w1". Actual: resukt ==='+resukt);
}


var resukt;
