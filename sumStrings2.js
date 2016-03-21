// sumStrings('712569312664357328695151392', '8100824045303269669937') - Expected: 712577413488402631964821329, instead got: 7.125774134884027e+26
function sumStrings(a,b) { 
	a.length === 0 ? a="0":a;
	b.length === 0 ? b="0":b;
	var stack = [],a1=a,b1=b,result = 0,mem = 0;
	if(parseInt(a,10) < parseInt(b,10)) {
		a1 = b;
		b1 = a;
	}
	var d_len = a1.length-b1.length;
	for(var i = b1.length;i--;){
		result = parseInt(a1.charAt(i+d_len),10) + parseInt(b1.charAt(i),10) + mem;
		console.log(i+"."+result+" "+a1.charAt(i+d_len)+"  + "+b1.charAt(i));
		if(result>9){
			stack.push(result.toString().charAt(1));
			mem = 1;
		}else{
			stack.push(result);
			mem = 0;
		}
	}
	if(d_len>0){
	 for(var i = b1.length-1;i--;){
		result = parseInt(a1.charAt(i),10) + mem;
		console.log(i+"."+a1.charAt(i));
		if(result>9){
			stack.push(result.toString().charAt(1));
			mem = 1;
		}else{
			stack.push(result);
			mem = 0;
		}
	 }
	}
	if(mem>0)stack.push(mem);
	return stack.reverse().join("");
}
// console.log(sumStrings("5","5"));
// console.log(sumStrings("","5"));
// console.log(sumStrings("5",""));
// console.log(sumStrings("25","55"));
// console.log(sumStrings("125","55"));
// console.log(sumStrings("15","155"));
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));
console.log("712577413488402631964821329");
// console.log((sumStrings('712569312664357328695151392', '8100824045303269669937')==="712577413488402631964821329")+" 712577413488402631964821329");
// console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));
//
