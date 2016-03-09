function validParentheses(parens){
 var stack = [];
 for(var i=0;i < parens.length;i++){
	if(parens.charAt(i).replace(/\s+/g,'')==="") continue;
	if(stack.length>0){
	 if(stack[stack.length-1]==="(" && parens.charAt(i)===")"){
	  stack.pop();
	 }else{
 	  stack.push(parens.charAt(i));
	 }
	}else{
	 stack.push(parens.charAt(i));
	}
 }
 return stack.length===0;
}
// console.log("() OK "+(validParentheses("()")===true));
console.log("()) nie OK "+(validParentheses("())")===false));
// console.log(")()( nie OK "+(validParentheses(")()(")===false));
// console.log("OK "+ validParentheses("()()()()()"));
console.log("()) "+validParentheses("())"));
