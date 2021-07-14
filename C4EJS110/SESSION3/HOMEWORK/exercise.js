//1.Variable swap

function ex1() {
    let a = 5;
    let b = 6;
    console.log(a, b);
    //Perform swapping
    // let tmp = a; // cách 1
    // a = b;
    // b = tmp;
    [a, b] = [b, a]; // cách 2
    console.log(a, b);
}

//2. Split String into Array//

function ex2() {
    console.clear();
    const s = 'Hello beauty there';
    const a = s.split(" ");
    console.log(a);
}

//3. In JavaScript, the spread operator (three dots): … can be useful in several tasks. Of these tasks is to log (print out) an array without using loops, try it//

function ex3() {
    console.clear();
    const a = [4, 5, 7, -8];
    console.log(...a);
}

//4. Write a script to simulate a clothes shop, asking and performing certain tasks from users//

let listItems = ["Jeans", "T-Shirt", "Socks"];

function readList() {
    console.clear();
    console.log("The currents items are:");
    for (let i in listItems) {
        console.log(`${Number(1)+i}. ${listItems[i]}`);
    }
}

function ex4() {
    let res;
    do {
        res = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D)?");
        if(res == ""){
            break;
        }
        else if (res == 'r' || res == 'R') {
            readList();
        }
        else if (res == 'c' || res == 'C') {
            listItems.push(prompt("Enter the name of the new item"));
            alert("Done");
        }
        else if (res == 'u' || res == 'U') {
            let posUpdate = Number(prompt("Enter the position you want to update"));
            listItems[posUpdate-1] = prompt("Enter the new name");
            alert("Done");
        }
        else if (res == 'd' || res == 'D'){
            let posDel = Number(prompt("Enter the position you want to delete"));
            listItems.splice(posDel-1,1);
            alert("Done");
        }
        else{
            alert("This command is not supported");
        }
    } while (1)
}

//5. Write a script to ask users enter a sequence of numbers, the Numbers are separated by commas, calculate the sum of the numbers and show it to users//

function ex5(){
    let seriNum = prompt("Enter a squence of Number, separated by commas (,)");
    let array = seriNum.split(",");
    let sum = array.reduce((sum,value) => Number(sum) + Number(value));
    alert(`The sum of them is ${sum}`);
}

//6. Write a script asking users to enter a sequence of numbers, the numbers are separated by commas, find the smallest number and log it out to users//

function ex6(){
    let seriNum = prompt("Enter a squence of numbers, separated by ","");
    let array = seriNum.split(",");
    let min = Infinity;
    for(let x of array){
        min = min > Number(x) ? x : min;
    }
    alert(`The smallest number is ${min}`);
}

//7. Create an array containing at least 5 numbers, then ask users enter a number, perform a search to look for the number in the array, if the number is found, tell user that with the index of it in the array, if not, also tell them so//

function ex7(){
    const arr = [3, 4, 6, -9, 10, -88, 2];
    let num = Number(prompt("Enter a number"));
    let index = arr.indexOf(num);
    if(index!=-1){
        alert(`${num} is FOUND in my array at index ${index}`);
    }
    else{
        alert(`${num} is NOT found in my array`);
    }
}

//8. You are a shepherd who owns a flock of sheep//

//8.1. Create an array to represent the sizes of your flock, and log all of your flock size, expected screen output://

let sheepSizes = [5, 7, 300, 90, 24, 50, 75];

function ex81(){
    console.clear();
    console.log("Hello, my name is Huu Dung and here is my sheep sizes:");
    console.log(sheepSizes.toString().replace(/,/g, " "));
}

//8.2. At the end of each month, you have to choose one and only one sheep to shear and thus you want to choose the biggest one to maximize your profit. Add scripts to search for the biggest sheep in your list//

function ex82(){
    console.log(`\nNow my biggest sheep has size ${Math.max.apply(null, sheepSizes)}, let's shave it`);
}

//8.3. When your biggest sheer, its size will return to the default size, which is 8.//

function ex83(){
    let maxIndex = sheepSizes.indexOf(Math.max.apply(null, sheepSizes));
    sheepSizes[maxIndex] = 8;
    console.log("\nAfter shearing, here is my flock");
    console.log(sheepSizes.toString().replace(/,/g, " "));
}

//8.4. In the following month, EVERY sheep in your flock grow, they have their size increased by 50. Log them out//

function ex84(index){
    console.log(`\nMONTH ${index}`);
    console.log("One month has, passed, my sheeps have grown, here are their sizes");
    sheepSizes = sheepSizes.map(size => size + 50);
    console.log(sheepSizes.toString().replace(/,/g, " "));
}

//8.5. Let’s do this for 4 months (or as long as you want)//

function ex85(){
    for(let i=2; i<=3; ++i){
        ex82();
        ex83();
        ex84(i);
    }
}

//8.6//

function ex86(){
    let sizeAll = sheepSizes.reduce((sum,value) => sum + value);
    console.log(`\nMy flock has size in total: ${sizeAll}`);
    console.log(`I would get ${sizeAll} * 2$ = ${sizeAll*2}`);
}

//9. Given the array//

//10. Write a script asking users to enter a sequence of names, separated by commas (,), Create a new array containing the names, each surrounded with <>.//

function ex10(){
    let listNames = prompt("Enter a sequence of names");
    let arrayNames = listNames.split(",");
    arrayNames = arrayNames.map(name => "<" + name + ">");
    alert(`${listNames} => ${arrayNames}`);
}

//11. Write a script asking users to enter a sequence of Numbers, separated by commas (,). Create a new array containing only the odd Numbers of the entered sequence//

function ex11(){
    let listNums = prompt("Enter a sequence number");
    let arrayNums = listNums.split(",");
    arrayNums = arrayNums.filter(num => (Number(num)%2));
    alert(`${listNums} => ${arrayNums}`);
}