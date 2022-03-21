/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency 
of digits.

Examples:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/
function sameFrequency(int1, int2) {
  let freq1 = {}
  let freq2 = {}

  let str1 = int1.toString();
  let str2 = int2.toString();
  if(str1.length !== str2.length) return false;

  for(let i=0; i < str1.length; i++){
    freq1[str1[i]] = (freq1[str1[i]] || 0) + 1
  }

  for(let j=0; j < str2.length; j++){
    freq2[str2[j]] = (freq2[str2[j]] || 0) + 1
  }

  for(let key in freq1){
    if(freq1[key] !== freq2[key]) return false
  }
  return true;
}

