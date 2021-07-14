/*Support funtion list movies*/
function printListMovies(){
    let res = "List movies:<br>";
    for (let x in listMovies) {
        res += listMovies[x] + "<br>";
    }
    resultWindow(res);
}

function printListMovies1(){
    let res = "";
    for (let x in listMovies) {
        res += listMovies[x] + "\n";
    }
    return res;
}

function questionWindow(question){
    document.getElementById("questionWindow").innerHTML = question;
}

function resultWindow(result){
    document.getElementById("resultWindow").innerHTML = result;
}

/*Init
Initialize an array named movies containing the titles of some of your favorite movies*/

let listMovies = ['Doremon', 'Pikachu', 'Onepiece', 'Slime'];

function init(){
    questionWindow("Initialize an array named movies containing the titles of some of your favorite movies");
    printListMovies();
}

/*Create
Add new item named newMovie into the end of the movies array you initialized, newMovie entered by users*/

function create() {
    questionWindow("Add new item named newMovie into the end of the movies array you initialized, newMovie entered by users");
    let newMovie = prompt("What's new movie title?");
    listMovies.push(newMovie);
    printListMovies();
}

/*Read
Read the item at position i in the movies array, i entered by user*/

function read(){
    questionWindow("Read the item at position i in the movies array, i entered by user");
    let position = prompt(`What position in list movies? List movies have ${listMovies.length} movie`);
    resultWindow(listMovies[position-1]);
}

/*Update
1. Update the first item of the movies array into movieTitle, movieTitle entered by users*/

function update1(){
    questionWindow("Update the first item of the movies array into movieTitle, movieTitle entered by users");
    let movieTitle = prompt("What movie name?");
    listMovies[0] = movieTitle;
    printListMovies();
}

/*Update
2. Update a item at position i of the movies into movieTitle, i and movieTitle entered by users*/

function update2(){
    questionWindow("Update a item at position i of the movies into movieTitle, i and movieTitle entered by users");
    let position = prompt(`What position want to update? List movies have ${listMovies.length} movie\n${printListMovies1()}`);
    listMovies[position-1] = prompt("What movie name?");
    printListMovies();
}

/*Delete
1. Delete 1 item at position i from movies array movies, i entered by users*/

function delete1(){
    questionWindow("Delete 1 item at position i from movies array movies, i entered by users");
    let position = prompt(`What position want to delete? List movies have ${listMovies.length} movie\n${printListMovies1()}`);
    listMovies.splice(position-1,1);
    printListMovies();
}

/*Delete
2. Delete n item at position i from movies array, i and n entered by users*/

function delete2(){
    questionWindow("Delete 1 item at position i from movies array movies, i entered by users");
    let position = prompt(`What position want to delete? List movies have ${listMovies.length} movie\n${printListMovies1()}`);
    let n = prompt(`How many movies want to delete from position ${position}? List movies have ${listMovies.length} movie\n${printListMovies1()}`);
    listMovies.splice(position-1,n);
    printListMovies();
}

/*Read All
1. Read or log all of items in movies array into console*/

function readAll1(){
    questionWindow("Read or log all of items in movies array into console");
    console.log(listMovies);
    printListMovies();
}

/*Read All
2. Read or log only first half items in movies array into console*/

function readAll2(){
    questionWindow("Read or log only first half items in movies array into console");
    let halfList = listMovies.length/2;
    let res = "Half of list movies:<br>";
    for(let i=0; i<halfList; ++i){
        console.log(listMovies[i]);
        res += listMovies[i] + "<br>";
    }
    resultWindow(res);
}

/*Read All
3. Read or log all of items in movies array into console with the item position*/

function readAll3(){
    questionWindow("Read or log all of items in movies array into console with the item position");
    let res = `List movies have ${listMovies.length} movie:<br>`;
    for(let x in listMovies){
        x = Number(x);
        console.log(`${x+1}. ${listMovies[x]}`);
        res += `${x+1}. ${listMovies[x]}<br>`;
    }
    resultWindow(res);
}

/*Update All
Change all items of movies array into lowercase*/

function updateAll(){
    questionWindow("Change all items of movies array into lowercase");
    for(let x in listMovies){
        listMovies[x] = listMovies[x].toLowerCase();
    }
    printListMovies();
}

/*Purpose of While
Write a script asking users their username, if the entered username is too long (>15 characters), tell them that and ask them to re-enter a new username, if the username is short enough (<=15 characters), tell them it is good.*/

function purposeOfWhile1(){
    questionWindow("Write a script asking users their username, if the entered username is too long (>15 characters), tell them that and ask them to re-enter a new username, if the username is short enough (<=15 characters), tell them it is good.");
    do{
        var check = false;
        let userName = prompt("Register an username");
        if(userName.length>15){
            alert("Your user name is too long");
        }
        else{
            alert("Good username");
            resultWindow("Good username");
            check = true;
        }
    }while(!check)
}

/*Purpose of While
Write a script to show user a quiz with 4 choices*/

function purposeOfWhile2(){
    questionWindow("Write a script to show user a quiz with 4 choices");
    do{
        var check = false;
        let choice = Number(prompt(`How many legs does a spider have?\n1. None\n2. 4 legs\n3. 8 legs\n4. 12 legs`));
        switch(choice){
            case 1:
            case 2:
            case 4:
                {
                    alert("Good luck next time");
                    check = true;
                    break;
                }
            case 3:
                {
                    alert("Bravo, you are correct");
                    check = true;
                    break;
                }  
            default:
                {
                    alert("Enter their choice again");
                }
        }
    }while(!check)
}

//Array

/*Người dùng nhập n số nguyên ngẫu nhiên từ bàn phím*/

let n;
let array = [];
let evenArray = [];
let oddArray = [];

function input(){
    n = Number(prompt("Enter numbers in Array"));
    for(let i=1; i<=n; ++i){
        array.push(Number(prompt(`Enter number ${i}`)));
    }
}

/*a. Sắp xếp dãy vừa nhập theo chiều tăng dần.*/

function sortArray(){
    questionWindow("Sắp xếp dãy vừa nhập theo chiều tăng dần");
    input();
    let res = "Array begin: " + array;
    for(let i=0; i<n-1; ++i){
        let check = true;
        for(let j=0; j<n-i-1; ++j){
            if(array[j]>array[j+1]){
                check = false;
                let tmp = array[j];
                array[j] = array[j+1];
                array[j+1] = tmp;
            }
        }
        if(check){
            break;
        }
    }
    res += "<br>Array after sort: " + array;
    resultWindow(res);
}



/*b. Lọc dãy trên thành 2 dãy: dãy chẵn và dãy lẻ*/

function evenOddArray(){
    for(let x in array){
        if(array[x]%2){
            oddArray.push(array[x]);
        }
        else{
            evenArray.push(array[x]);
        }
    }
    let res = "Array begin: " + array;
    res += "<br>Odd array: " + oddArray;
    res += "<br>Even array: " + evenArray; 
    resultWindow(res);
}

/*c. Loại bỏ các số trùng nhau ở 2 dãy*/

function delSameArray(array){
    let index = 0;
    while(index < array.length){
        let cnt = 1;
        while(array[index]==array[index+1]){
            cnt++;
            index++;
        }
        if(cnt>1){
            index = index - cnt + 1;
            array.splice(index,cnt);
        }
        else{
            index++;
        }
    }
}

function delSameTwoArray(){
    let res = "";
    res += "Odd array before del: " + oddArray;
    res += "<br>Even array before del: " + evenArray;
    delSameArray(oddArray);
    delSameArray(evenArray);
    res += "<br>Odd array after del: " + oddArray;
    res += "<br>Even array after del: " + evenArray;
    resultWindow(res);
}