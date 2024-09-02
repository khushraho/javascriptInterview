////! Example1:-
function isAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  let strOne=str1.split("").sort().join("");
//   console.log(strOne);
  let strTwo=str2.split("").sort().join("");
//   console.log(strTwo);
  return strOne===strTwo;
}
// console.log(isAnagrams("rat", "tadr"));

////! Example2:-
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const obj1 = {};
  const obj2 = {};
  for (var i = 0; i < str1.length; i++) {
    obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
    obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
  }
  console.log(obj1, "......obj1");
  console.log(obj2, "......obj2");
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}
// console.log(isAnagram("hello","olleh"));
