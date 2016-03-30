//return 'true' IF passed-in string contains 'complete brackets'

/*
  Solution:
    loop through string
    1. IF char is an open bracket, push char into 'stack'
    2. IF char is a closed bracket, check IF char's match is === last el in 'stack'
      2-1. IF NOT, return false

*/
//should return true
var brackets_0 = '({}[])';
var brackets_1 = '({[]})';

//should return false
var brackets_2 = '({)}';
var brackets_3 = '((())))';
var brackets_4 = '({]})';

var openBrackets = {
  '(': ')',
  '{': '}',
  '[': ']'
};

var closedBrackets = {
  ')': '(',
  '}': '{',
  ']': '['
};

var allIsKosher = function(str){
  var stack = [];

  for(var i = 0; i < str.length; i++){ //error here
    if(openBrackets[str.charAt(i)]){
      stack.push(str.charAt(i));
    } else if (!(stack.length && closedBrackets[str.charAt(i)] === stack.pop())){ //error here
      return false;
    }
  }
  if(stack.length === 0){
    return true;
  } else { return false; }
};

console.log('==truthies==');
console.log(allIsKosher(brackets_0));
console.log(allIsKosher(brackets_1));

console.log('==falsies==');
console.log(allIsKosher(brackets_2));
console.log(allIsKosher(brackets_3));
console.log(allIsKosher(brackets_4));




