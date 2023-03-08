const palindromes = function (string) {
    let reversed='';
    let count =string.length;
    for(let i=0;i<=count;i++){
      let letter='';
       letter = string.substr(count-i,1);
      reversed += letter;
       }
    let phrase = string.toLowerCase()
                       .split("")
                       .filter(letter=>{
                         if(letter!="!"&&letter!=" "&&letter!=","&&letter!="."){
                            return true
                         }});
    let phraseReversed = reversed.toLowerCase()
                             .split("")
                             .filter(letter=>{
                                if(letter!="!"&&letter!=" "&&letter!=","&&letter!="."){
                                   return true
                                }});
        if(JSON.stringify(phrase)=== JSON.stringify(phraseReversed )){
            return true;
        }
        else{
            return false;
        }
    
};

// Do not edit below this line
module.exports = palindromes;
