

/*---
info: |
    The production IterationStatement: "for (var VariableDeclarationNoIn in
    Expression) Statement"
es5id: 12.6.4_A4
description: Using Object as an Expression is appropriate. Eval is used
---*/

var __str, __evaluated, hash, ind;
__str="";

__evaluated = eval("for(ind in (hash={2:'b',1:'a',4:'d',3:'c'}))__str+=hash[ind]");


if ( !( (__evaluated.indexOf("a")!==-1)& (__evaluated.indexOf("b")!==-1)& (__evaluated.indexOf("c")!==-1)&(__evaluated.indexOf("d")!==-1) ) ) {
	throw new Test262Error('#1: (__evaluated.indexOf("a")!==-1)& (__evaluated.indexOf("b")!==-1)& (__evaluated.indexOf("c")!==-1)&(__evaluated.indexOf("d")!==-1)');
}


if (__str !== __evaluated) {
	throw new Test262Error('#2: __str === __evaluated. Actual:  __str ==='+ __str  );
}

