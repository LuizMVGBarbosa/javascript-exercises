const sumAll = function(number1,number2) {
    let sumResult =0;
    if (number1<0||number2<0||  typeof number1 != 'number'||typeof number2 != 'number'){
        return "ERROR"
    }
     for(let i=0;i<=number1||i<=number2;i++){
    let counted = 0+i;
    sumResult += counted;
};
  return sumResult;};
    
    

// Do not edit below this line
module.exports = sumAll;
