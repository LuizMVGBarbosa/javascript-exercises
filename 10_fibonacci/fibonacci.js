const fibonacci = function(number) {
    if (number < 0) return "OOPS";
  let fiboNumber =[];
  for(let i = 0;i<number;i++){
    if(fiboNumber.length<2){
    fiboNumber.push(1)}
    else{
        let lastfibo = fiboNumber[fiboNumber.length-1]+fiboNumber[fiboNumber.length-2];
        fiboNumber.push(lastfibo);}
    }
return fiboNumber[fiboNumber.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
