const getTheTitles = function(object) {
    let titles =[]
    const bookShelf = object.filter(book =>{
        if(book.title!="")
        titles.push(book.title)
    })
   return  titles;
};

// Do not edit below this line
module.exports = getTheTitles;
