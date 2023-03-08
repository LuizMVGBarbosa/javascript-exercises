const add = function(a,b) {
	let result = a+b;
  return result
};

const subtract = function(a,b) {
  let result = a-b;
  return result
	
};

const sum = function(numbers) {
  let array = numbers;
  return array.reduce((total,number)=> total+number,0)
  };

const multiply = function(numbers) {
  let result = 0;
  numbers.forEach(number => {
    if(result==0){
      result=number
    }
   else{
    result*=number
   }
})
  return result;
	
};

const power = function(...numbers) {
  let array =[...numbers];
  let result=0;
  let expo =0;
  array.forEach(number => {
  if(result==0 ){
    result=number;
     
  }
  else{
    expo=result;
    for(let i=1;i<number;i++){
      result*=expo
    }
  }
    })
    return result;
    
};

const factorial = function(number) {
  let result=1;
  for(let i=0;i<number;i++){
    result*=(number-i)
  }
	return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
