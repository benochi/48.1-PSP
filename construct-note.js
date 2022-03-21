// add whatever parameters you deem necessary
/*Write a function called constructNote, which accepts two strings, a message and some letters. The function should 
return true if the message can be built with the letters that you are given; otherwise, it should return false.
Assume that there are only lowercase letters and no space or special characters in both the message and the letters.
Constraints:
Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

Examples:
constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true*/

function constructNote(msg, letterStr) {
  const freqLetterStr = {};
  const freqMsg = {};

  for(let char of letterStr){
    freqLetterStr[char] = (freqLetterStr[char] + 1) || 1;
  }

  for(let char of msg){
    freqMsg[char] = (freqMsg[char] + 1) || 1;
  }
  
  for(let char in freqMsg){
    if(!freqLetterStr[char]) return false;
    if(freqMsg[char] > freqLetterStr[char]) return false;
  }
  return true
}
