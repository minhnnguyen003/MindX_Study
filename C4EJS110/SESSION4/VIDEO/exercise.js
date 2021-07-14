//Object - Init
//1. Declare a variable named movie with an object value//

let movie = {
    title: "Bố Già",
    year: 2021,
    rate: 7.5
};

//Object - Read

//2.1. Log all of 3 the properties of the movie object to the console using 2 different ways//

function ex21(){
    console.clear();
    console.log("title: " + movie.title);
    console.log("year: " + movie.year);
    console.log("rate: " + movie.rate);
    console.log("title: " + movie["title"]);
    console.log("year: " + movie["year"]);
    console.log("rate: " + movie["rate"]);
}

//2.2. Log an non-existent property of the movie, director, what is the result?//

function ex22(){
    console.clear();
    console.log("result is " + movie.director);
}

//2.3. Now apply it to upgrade Read object, after users enter the property, check whether the property exists, if yes, show them the value, if no, tell them that//

function ex23(){
    let res = prompt("What you want to know?");
    if(movie[res]==null){
        alert(`'${res}' does now exists in our data`);
    }
    else{
        alert(movie[res]);
    }
}

//Object - Update

/*3.1. Update
- Change the rate of the movie to 8.7
- Increase the rate of the movie by 0.5*/

function ex31(){
    console.clear();
    movie.rate = 8.7;
    console.log("rate: " + movie.rate);
    movie.rate *= 0.5;
    console.log("rate: " + movie.rate);
}

//3.2. Write a script, asking users what they want to update and what is the update, perform the update and then log out the result//

function ex32(){
    console.clear();
    let res = prompt("What you want to update?");
    movie[res] = prompt("What is the update?");
    console.log(movie);
}

//Object - Create

//Upgrade Update script to check whether the property entered by users exist, if yes, perform as usual, if no, tell them that we will add new and perform create//

function ex4(){
    console.clear();
    let res = prompt("What do you want update");
    if(movie[res] == null){
        alert(`'${res}' does not exists in our data, we will add new`);
        movie[res] = prompt("Enter the new data");
    }
    else{
        movie[res] = prompt("What is the update?");
    }
    console.log(movie);
}

// Array of Object

//5.1. Create an array called movies, containing at least 3 movie data with the same structure all have title, year and rate (you can add more property if you like)//

function Movie(title,year,rate){
    this.title = title;
    this.year = year;
    this.rate = rate;
}

let movie1 = new Movie("The Neighbor", 2012, 6.6);
let movie2 = new Movie("Train to Busan", 2016, 7.6);
let movie3 = new Movie("Along with the Gods: The Last 49 Days", 2018, 7.1);

let listMovies = [movie1, movie2, movie3];

//5.2. Print or log out the first movie from movie list//

function ex52(){
    console.clear();
    console.log(listMovies[0]);
}

//5.3. Print or log out the title of the last movie from movie list//

function ex53(){
    console.clear();
    console.log(listMovies[listMovies.length-1].title);
}

//5.4. Use a loop to print or log out all of the movie in the movie list//

function ex54(){
    for(let x in listMovies){
        console.log(listMovies[x]);
    }
}

//5.5. Use a loop to print or log out all of the movie in the movie list, the data is prettified as follow//

function ex55(){
    console.clear();
    for(let x of listMovies){
        console.log("------------------------------");
        console.log(x.title);
        console.log("Year: " + x.year);
        console.log("Rate: " + x.rate);
    }
}

//5.6. Increase the rate of the last movie in the movies list by 0.7//


function ex56(){
    listMovies[listMovies.length-1].rate *= 0.7;
}

//Object containing array

//6.1. Create an object named movie, with title, year and rate and characters. The characters contain at least 3 characters of the movie//

let movie6 = {
    title: "Along with the Gods: The Last 49 Days",
    year: 2018,
    rate: 7.1,
    characters: ["Ma Dong-seok", "Ha Jung-woo", "Ju Ji-hoon"]
};

//6.2. Print or log out the movie data in the following format (Note, remember the spread operator … for fast logging an array)//

function ex62(movie){
    console.log(movie.title);
    console.log("Year: " + movie.year);
    console.log("Rate: " + movie.rate);
    console.log("Casts: " + movie.characters.toString().replace(/,/g, " "));
}

//6.3. Add new cast to the movie and then log it back//

function ex63(){
    console.clear();
    let newcast = prompt("What's new charater name?");
    movie6.characters.push(newcast);
    ex62(movie6);
}

//Object and Array mix structure//

//1. Create an array named movies, containing at least three movies, all have title, year, rate and characters properties//

Movie.prototype.characters = [];

function ex71(){
    listMovies.splice(0);
    movie1 = new Movie("Attack on titans", 2013, 8.8);
    movie1.characters = ["Eren", "Armin", "Mikasa"];
    movie2 = new Movie("Mind Hunter", 2017, 8.6);
    movie2.characters = ["Holden", "Bill"];
    movie3 = new Movie("Manhunt: Unabomber", 2017, 8.1);
    movie3.characters = ["Ted"];
    listMovies = [movie1,movie2,movie3];
}

//2. Log or print all the movies in the movies array//

function ex72(){
    console.clear();
    ex71();
    for(let mov of listMovies){
        console.log("------------------------");
        ex62(mov);
    }
}
