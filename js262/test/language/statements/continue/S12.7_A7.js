

/*---
info: |
    Appearing of continue within eval statement that is within an
    IterationStatement yields SyntaxError
es5id: 12.7_A7
description: Using eval "eval("continue LABEL1")"
---*/

var x=0,y=0;


try{
	LABEL1 : do {
        x++;
        eval("continue LABEL1");
        y++;
    } while(0);
	throw new Test262Error('#1: eval("continue LABEL1") does not lead to throwing exception');
} catch(e){
	if(!(e instanceof SyntaxError)){
		throw new Test262Error("1.1: Appearing of continue within eval statement inside of IterationStatement yields SyntaxError");
	}
}

