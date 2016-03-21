// sumStrings('712569312664357328695151392', '8100824045303269669937') - Expected: 712577413488402631964821329, instead got: 7.125774134884027e+26
function sumStrings(a,b) { 
  if(a==='') return b;
  if(b==='') return a;
  var arr = a.split("").reverse(), 
   brr = b.split("").reverse(); 
  var diff = arr.length-brr.length,sum=0;
  if(diff<0){
	for(var i=0;i < arr.length;i++){
	   sum+=(parseInt(arr[i],10)+parseInt(brr[i],10))*Math.pow(10,i); 
	}
	if(a.length < sum.toString.length){
	  var b_part = b.substring(0,diff);
	  var val = 0;
		for(var j=0;j < b_part.length;j++){
		if(j===0){
		   val = parseInt(b_part.charAt(b_part.length-j),10)+parseInt(sum.toString().charAt(0),10);
		   if(val > 0){
			 b_part = b_part.substring(0,b_part.length-j)+val.toString().charAt(1);	
			 val = parsInt(val.charAt(0),10);
			}else{
			 b_part = b_part.substring(0,b_part.length-j)+val.toString().charAt(0);	
			}	
		}else{
		   val = parseInt(b_part.charAt(b_part.length-j),10)+val;
		   if(val > 0){
			 b_part = b_part.substring(0,b_part.length-j)+val.toString().charAt(1);	
			 val = parsInt(val.charAt(0),10);
			}else{
			 b_part = b_part.substring(0,b_part.length-j)+val.toString().charAt(0);	
			}	
		}
	  }
	}else{
	 
	}
	var b2 = b.substring(0,Math.abs(diff));
	for(var j=0;j < (b.length+diff);j++){
	  b2+='0';
	}
	sum+=parseInt(b2,10);
  }else if(diff>0){
	for(var i=0;i < brr.length;i++){
	   sum+=(parseInt(arr[i],10)+parseInt(brr[i],10))*Math.pow(10,i); 
	}
	  var a2 = a.substring(0,diff);
	  for(var j=0;j < (a.length-diff);j++){
	   a2+='0';
	  }
	  sum+=parseInt(a2,10);
  }else{
	for(var i=0;i < arr.length;i++){
     sum+=(parseInt(arr[i],10)+parseInt(brr[i],10))*Math.pow(10,i); 
    }
  }
  return sum.toString();
}
console.log(sumStrings("5","5"));
console.log(sumStrings("","5"));
console.log(sumStrings("5",""));
console.log(sumStrings("25","55"));
console.log(sumStrings("125","55"));
console.log(sumStrings("15","155"));
console.log((sumStrings('712569312664357328695151392', '8100824045303269669937')==="712577413488402631964821329")+" 712577413488402631964821329");
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));
