function number2words(n){
var totwenty = ["zero","one","two",
				"three","four","five",
				"six","seven","eight",
				"nine","ten","eleven",
				"twelve","thriteen",
				"fourteen","fifteen","sixteen",
				"seventeen","eighteen","nineteen"],
	tohundred = ["twenty","thirty","fourty",
				"fifty","sixty","seventy","eighty","ninety"],
	totousend = ["hundred","thousend"],
    result = [];
	if(n<20){
		return totwenty[n];
	}else{
		for(var i=0; i < n.toString().length;i++){
		var digit = parseInt(test.toString().substring(0,test.toString().length-i),10)%10;
		 if(i===0 && digit>0){
		  result.push("-"+totwenty[digit]);
		 }else if(i===1){
		  result.push(totwenty[digit]);
		 }
		}
	}



}
