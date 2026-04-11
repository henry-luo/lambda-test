

/*---
info: VariableDeclaration within "for" statement is allowed
es5id: 12.2_A7
description: Declaring variable within "for" statement
---*/


try{
	infor_var = infor_var;
}catch(e){
	throw new Test262Error('#1: Variable declaration inside "for" loop is admitted');
};


for (;;){
    break;
    var infor_var;
}
