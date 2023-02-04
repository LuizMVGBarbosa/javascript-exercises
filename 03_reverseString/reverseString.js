const reverseString = function(string) {
    let reversed="";
    let count =string.length;
    for(let i=0;i<=count;i++){
      let letter="";
       letter = string.substr(count-i,1);
      reversed += letter;
       }
      return reversed;
};
reverseString('hello');
reverseString('hello there');
reverseString('123! abc!');
reverseString('');

// Do not edit below this line
module.exports = reverseString;
