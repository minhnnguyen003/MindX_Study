/*1.1. What are var, let and const in JavaScript?*/

function ex1a() {
    document.getElementById("questionWindow").innerHTML = "What are var, let and const in JavaScript?";
    let result = "var, let và const là các từ khóa (keywords) dùng để khai báo biến.";
    document.getElementById("resultWindow").innerHTML = result;
}

/*1.2. What are the differences between let and var?*/

function ex1b() {
    document.getElementById("questionWindow").innerHTML = "What are the differences between let and var?";
    let result = "var có phạm vi toàn cục(globally scoped) và phạm vi chức năng(function scoped), còn let có phạm vi khối(block scoped).<br><br>"
    result += "Trong phạm vi sử dụng, dùng var: các biến có thể cập nhật và khai báo lại, còn dùng let: các biến có thể cập nhật nhưng không được khai báo lại.<br><br>";
    result += "var có cơ chế hoisting, còn let thì không có.";
    document.getElementById("resultWindow").innerHTML = result;
}
/*1.3. What are the differences between let and const?*/

function ex1c() {
    document.getElementById("questionWindow").innerHTML = "What are the differences between let and const?";
    let result = "let có thể được khai báo mà không cần khởi tạo giá trị, còn const phải được khởi tạo giá trị khi khai báo.";
    document.getElementById("resultWindow").innerHTML = result;
}

/*1.4. What to use in what cases?*/

function ex1d() {
    document.getElementById("questionWindow").innerHTML = "What to use in what cases?";
    let result = "Dùng const khi biết giá trị của biến không thay đổi(bất biến).<br><br>";
    result += "Dùng let trong các trường hợp giá trị của biến thay đổi và biến được đặt trong 1 block(như vòng lặp for, câu lệnh điều kiện if,...).<br><br>";
    result += "Dùng var trong các trường hợp giá trị của biến thay đổi và biến là biến toàn cục trong chương trình.";
    document.getElementById("resultWindow").innerHTML = result;
}

/*2.1. What is Boolean?*/

function ex2a() {
    document.getElementById("questionWindow").innerHTML = "What is Boolean?";
    let result = "Boolean là kiểu dữ liệu logic(logical type).";
    document.getElementById("resultWindow").innerHTML = result;
}

/*2.2. What results in Boolean?*/

function ex2b() {
    document.getElementById("questionWindow").innerHTML = "What results in Boolean?";
    document.getElementById("resultWindow").innerHTML = "Boolean chỉ có 2 giá trị là true và false.";
}

/*3.a. 7 numbers, starting from 0 (no user input)*/

function ex3a() {
    document.getElementById("questionWindow").innerHTML = "7 numbers, starting from 0 (no user input)";
    let result = "";
    for (let i = 0; i < 7; ++i) {
        result += String(i) + "<br>";
    }
    document.getElementById("resultWindow").innerHTML = result;
}

/*3.b. n numbers, starting from 0, n entered by user*/

function ex3b() {
    document.getElementById("questionWindow").innerHTML = "n numbers, starting from 0, n entered by user";
    let n = Number(prompt("Enter a number"));
    let result = "";
    for (let i = 0; i < n; ++i) {
        result += String(i) + "<br>";
    }
    document.getElementById("resultWindow").innerHTML = result;
}

/*3.c. A sequence of numbers, starting from 3, ending before n, n entered by user*/

function ex3c() {
    document.getElementById("questionWindow").innerHTML = "A sequence of numbers, starting from 3, ending before n, n entered by user";
    let n = Number(prompt("Enter n"));
    let result = "";
    for (let i = 3; i < n; ++i) {
        result += String(i) + "<br>";
    }
    document.getElementById("resultWindow").innerHTML = result;
}

/*3.d. A sequence of numbers, starting from c, ending before n, c and n entered by user*/

function ex3d() {
    document.getElementById("questionWindow").innerHTML = "A sequence of numbers, starting from c, ending before n, c and n entered by user";
    let n = Number(prompt("Enter n"));
    let c = Number(prompt("Enter c"));
    let result = "";
    while (c < n) {
        result += String(c) + "<br>";
        c++;
    }
    document.getElementById("resultWindow").innerHTML = result;
}

/*3.e. A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user*/

function ex3e() {
    document.getElementById("questionWindow").innerHTML = "A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user";
    let n = Number(prompt("Enter n"));
    let c = Number(prompt("Enter c"));
    let result = "";
    while (c < n) {
        result += String(c) + "<br>";
        c += 3;
    }
    document.getElementById("resultWindow").innerHTML = result;
}

/*3.f. A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user*/

function ex3f() {
    document.getElementById("questionWindow").innerHTML = "A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user";
    let n = Number(prompt("Enter n"));
    let c = Number(prompt("Enter c"));
    let s = Number(prompt("Enter s"));
    let result = "";
    while (c < n) {
        result += String(c) + "<br>";
        c += s;
    }
    document.getElementById("resultWindow").innerHTML = result;
}

/*4. Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user*/

function ex4() {
    document.getElementById("questionWindow").innerHTML = "Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user";
    let n = Number(prompt("Enter a number"));
    let factorial = 1;
    for (let i = n; i > 1; --i) {
        factorial *= i;
    }
    document.getElementById("resultWindow").innerHTML = `The factorial of ${n} is ${factorial}`;
}

/*5. Write a program asking users their age, and then decide if they are old enough to view a 14+ content*/

function ex5() {
    document.getElementById("questionWindow").innerHTML = "Write a program asking users their age, and then decide if they are old enough to view a 14+ content";
    let age = Number(prompt("How old are you?"));
    if (age < 14) {
        document.getElementById("resultWindow").innerHTML = "You are not enough to view this content";
    }
    else {
        document.getElementById("resultWindow").innerHTML = "Enjoy!";
    }
}

/*6. Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range*/

function ex6() {
    document.getElementById("questionWindow").innerHTML = "Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range";
    let tmp = 9 / 2;
    let n = Number(prompt("Enter a number"));
    if (n <= tmp) {
        document.getElementById("resultWindow").innerHTML = "Lower half of 9";
    }
    else {
        document.getElementById("resultWindow").innerHTML = "Higher half of 9";
    }
}

/*7. Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n*/

function ex7() {
    document.getElementById("questionWindow").innerHTML = "Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n";
    let n = Number(prompt("n="));
    let x = Number(prompt("x="));
    let tmp = n / 2;
    if (x <= tmp) {
        document.getElementById("resultWindow").innerHTML = `${x} is lower half of ${n}`;
    }
    else {
        document.getElementById("resultWindow").innerHTML = `${x} is higher half of ${n}`;
    }
}

/*8. Write a script to check if a number is even (divisible by 2) or odd number*/

function ex8() {
    document.getElementById("questionWindow").innerHTML = "Write a script to check if a number is even (divisible by 2) or odd number";
    let x = Number(prompt("x="));
    if (x % 2) {
        resultWindow(`${x} is an odd number`);
    }
    else {
        resultWindow(`${x} is an even number`);
    }
}

/*9.a. 6 L’s and H’s, half L’s, half H’s (L means low, H means high)*/

function ex9a() {
    document.getElementById("questionWindow").innerHTML = "6 L’s and H’s, half L’s, half H’s (L means low, H means high)";
    let result = "";
    for (let i = 1; i <= 6; ++i) {
        if (i < 4) {
            result += "L" + "<br>";
        }
        else {
            result += "H" + "<br>";
        }
    }
    resultWindow(result);
}

/*9.b. n L’s and H’s in total, n entered by user*/

function ex9b() {
    document.getElementById("questionWindow").innerHTML = "n L’s and H’s in total, n entered by user";
    let n = Number(prompt("Enter the total number of L's and H's?"));
    let tmp = n / 2;
    let result = "";
    while (n > 0) {
        if (n > tmp) {
            result += "L" + "<br>";
        }
        else {
            result += "H" + "<br>";
        }
        n--;
    }
    resultWindow(result);
}

/*9.c. 8 1’s and 0’s in total, consecutively*/

function ex9c() {
    document.getElementById("questionWindow").innerHTML = "8 1’s and 0’s in total, consecutively";
    let result = "";
    for (let i = 0; i < 8; ++i) {
        if (i % 2) {
            result += "1" + "<br>";
        }
        else {
            result += "0" + "<br>";
        }
    }
    resultWindow(result);
}

/*9.d. n 1’s and 0’s in total, consecutively, n entered by user*/

function ex9d() {
    document.getElementById("questionWindow").innerHTML = "1’s and 0’s in total, consecutively, n entered by user";
    let n = Number(prompt("Enter the total number of 1's and 0's"));
    let result = "";
    for (let i = 0; i < n; ++i) {
        if (i % 2) {
            result += "1" + "<br>";
        }
        else {
            result += "0" + "<br>";
        }
    }
    resultWindow(result)
}

/*10. Write a script to calculate the BMI (Body Mass Index) of a person, the formula is as follows*/

function ex10() {
    document.getElementById("questionWindow").innerHTML = "Write a script to calculate the BMI (Body Mass Index) of a person, the formula is as follows";
    let weight = Number(prompt("Your weight in kg?"));
    let height = Number(prompt("Your height in cm?"));
    height /= 100;
    let BMI = weight / (height * height);
    alert(`Your BMI is ${BMI.toFixed(1)}`);
    if (BMI < 16) {
        resultWindow("You are severely underweight");
    }
    else if (BMI < 18.5) {
        resultWindow("You are underweight");
    }
    else if (BMI < 25) {
        resultWindow("You are normal");
    }
    else if (BMI < 30) {
        resultWindow("You are overweight");
    }
    else {
        resultWindow("You are obese");
    }
}


    function resultWindow(result) {
        document.getElementById("resultWindow").innerHTML = result;
    }







