// // dao nguoc chuoi

// function reverseString(s){
//     let length = s.length -1;
//     let reverseS = "";
//     for(let i = length ; i != -1; --i){
//         reverseS += s[i];
//     }
//     return reverseS;
// }

// console.log(reverseString("dung"));


// // kiem tra chuoi doi xung

// function isDoiXung(s){
//     let left = 0;
//     let right = s.length - 1;
//     if(right <= 0) return true;
//     while(left < right){
//         if(s[left] != s[right]) return false;
//         else{
//             left++;
//             right--;
//         }
//     }
//     return true;
// }

// console.log(isDoiXung("abba"));
// console.log(isDoiXung("aabb"));

// // Tim phan tu lon thu 2

// let array = [100,3,6,2,3,60];

// function find2(array){
//     array.sort((a, b) => b - a);
//     return array[1];
// }

// console.log(find2(array));

// // forEach()

let array = [1,2,2,3,3,4,5];

localStorage.setItem("array", array);