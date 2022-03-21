/*Write a function called isSubsequence which takes in two strings and checks whether the characters 
in the first string form a subsequence of the characters in the second string. In other words, 
the function should check whether the characters in the first string appear somewhere in the second string, 
without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
*/

function isSubsequence(str1, str2) {
  if(!str1) return true;
  let str1Index = 0;
  let str2Index = 0;

  while(str2Index < str2.length){
    if(str2[str2Index] === str1[str1Index]){
      str1Index++;
    }
    if(str1Index === str1.length) return true;
    str2Index++;
  }
  return false;
}
