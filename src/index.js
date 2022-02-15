module.exports = function check(str, bracketsConfig) {
  const stack = [];

 for (let i = 0; i < str.length; i++) {

  for (element of bracketsConfig) {
    if ( str[i] === element[0]) {
      
      if (element[0] === element[1] && stack[stack.length-1] === element[0]) {
          stack.pop()
          continue;
        }
 
      stack.push(str[i])
      continue;
    }

    if (str[i] === element[1]) {
      if (stack.length === 0) {
        return false;
      }
      if (stack[stack.length-1] === element[0]) {
        stack.pop()
      } else {
        return false;
      }
    }
  }
  
 }
 return stack.length === 0 ?  true : false;

}
