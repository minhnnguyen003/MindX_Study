/*1a. In JavaScript, in what cases, you will get the SyntaxError telling you that some of your variables have invalid names? 
Can you give 3 different examples of invalid variable names?*/

console.log('Trong JavaScript, những trường hợp tên biến không hợp lệ là:');
console.log('Bắt đầu bằng số');
console.log('Chứa các kí tự đặc biệt (kể cả khoảng trắng), ngoại trừ "_" và "$"');
console.log('Trùng với các từ khóa (keywords) của JavaScript');
console.log('3 ví dụ khác nhau về tên biến không hợp lệ là:');
console.log('27years (không hợp lệ vì tên biến bắt đầu bằng số)');
console.log('first-name (không hợp lệ vì tên biến chứa kí tự đặc biệt "-")');
console.log('continue (không hợp lệ vì tên biến trùng với từ khóa của JavaScript');

/*1b. In JavaScript, how to check a variable data types?*/

console.log('Trong JavaScript, để kiểm tra kiểu dữ liệu của 1 biến ta sử dụng toán tử typeof');

/*2. Watch this video to review about HTML, CSS, JavaScript functions in the front-end web, and then connect these two columns*/

console.log('1-b, 2-a, 3-e, 4-c');

/*3a. A String named message with value ‘Coding is great’, then use console.log to print it out*/

let message = 'Coding is great';
console.log(message);

/*3b. A Number named studentCount with value 0, then use console.log to  print it out*/

let studentCount = 0;
console.log(studentCount);

/*4a. Change message into ‘Coding might not be easy, but still great’, then use console.log to  print it out*/

message = 'Coding might not be easy, but still great';
console.log(message);

/*4b. Change studentCount into total of the students in our class right now (16 for example), then use console.log to print it out*/

studentCount = 16;
console.log(studentCount);

/*4c. After completing exercise a, change the message into lowercase, then use console.log to print it out*/

message = message.toLowerCase();
console.log(message);

/*4d. After completing exercise b, increase studentCount by 1, then use console.log to print it out*/

studentCount++;
console.log(studentCount);

/*5. Write a script to show user a nice message*/

alert('You look beautiful today');

/*6. Write a script to ask user about their name, and then say hi to them, say something nice to them if you want :)*/

let yourName = prompt('Hi there, your name please?');
alert('Hi ' + yourName + '! Have a beautiful day');

/*7. Write a script that ask 2 things from users, their first name and last name, then greet them with their full name*/

let firstName = prompt('Enter your first name');
let lastName = prompt('Enter your last name');
alert('Hi ' + lastName + ' ' + firstName);

/*8. Write a script that calculates the area of a square*/

let lenSquare = prompt('Enter side length of the square');
lenSquare = Number(lenSquare);
let areaSquare = lenSquare * lenSquare;
alert(`The square area is ${areaSquare}`);

/*9. Write a script that calculates the area of a circle*/

const pi = 3.14;
let radCircle = prompt('Enter the radius of the circle');
radCircle = Number(radCircle);
let areaCircle = pi * radCircle * radCircle;
alert(`The circle area is ${areaCircle.toFixed(1)}`);

/*10. Write a script that converts Celsius (0C) into Fahrenheit (0F)*/

let doC = prompt('Enter the temperature in Celcius');
doC = Number(doC);
let doF = 1.8 * doC + 32;
alert(`${doC} (C) = ${doF.toFixed(1)} (F)`);