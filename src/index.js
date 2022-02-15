module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 > 0){
    return false;
  }

  const arrFromStr = Array.from (str);
  
  for (el of bracketsConfig) {
    if (el[0] === el[1]) {
      const arrWithEqBrackets = arrFromStr.filter( x => x === el[0])
      if (arrWithEqBrackets.length % 2 > 0) {
        return false;
      }
    }  else { 
      const arrWithOpen = arrFromStr.filter( x => x === el[0]);
      const arrWithClose = arrFromStr.filter( x => x === el[1]);

      if (arrWithOpen.length !== arrWithClose.length) {
        return false;
      }

      if (arrFromStr.lastIndexOf(el[0]) > arrFromStr.lastIndexOf(el[1])) {
        return false;
      }

      do {
        let inOpen = arrFromStr.lastIndexOf(el[0]);
        let arrFromOpen = arrFromStr.slice(inOpen);
        if (!arrFromStr.slice(inOpen).includes(el[1])) {
          return false;
        }
        let inClose = arrFromOpen.indexOf(el[1]) + inOpen;
        
        if (arrFromStr.slice(inOpen+1, inClose).length % 2 > 0) {
          return false;
        }
        arrFromStr.splice(inOpen, 1);
        arrFromStr.splice(inClose, 1);
      
      } while (arrFromStr.includes(el[0]))

      arrFromStr.splice(0).concat(Array.from (str));
    
  }
  arrFromStr.splice(0).concat(Array.from (str));
}

  return true;
}
