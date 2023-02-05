const removeFromArray = function(array,...args) {
    let preSelected = array
    for(let i=0;i<=args.length;i++){
      for(const selected of array){
          if(arguments[i]===selected){
              let index =preSelected.indexOf(selected)
              preSelected.splice(index,1);
          }

      }
    }
    return preSelected;
};

// Do not edit below this line
module.exports = removeFromArray;
