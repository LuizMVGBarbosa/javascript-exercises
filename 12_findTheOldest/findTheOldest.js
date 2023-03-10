const findTheOldest = function(person) {
    let oldest ;
    const currentYear = new Date().getFullYear();
      const ordered = person.sort((a,b)=>{
        if (!a.yearOfDeath) {
            a.yearOfDeath = currentYear;
          }
          if (!b.yearOfDeath) {
            b.yearOfDeath = currentYear;
          }
       const lastGuy = a.yearOfDeath - a.yearOfBirth;
       const nextGuy = b.yearOfDeath - b.yearOfBirth;
       if(lastGuy>nextGuy){
        return -1;
      }
        else{
          return 1;
        }
   }
      )
     oldest = ordered[0];
    return oldest};
// Do not edit below this line
module.exports = findTheOldest;
