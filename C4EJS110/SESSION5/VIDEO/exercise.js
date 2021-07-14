//1.1. Learn how to create a random number from 0 to 1//

function ex11() {
    console.clear();
    console.log(`First run: ${Math.random().toFixed(2)}`);
    console.log(`Second run: ${Math.random().toFixed(2)}`);
}

//1.2. Learn how to randomly pick an item from an array//

function ex12() {
    console.clear();
    let array = [2, 5, 6, 9, 10];
    console.log(`First run: ${array[Math.floor(Math.random() * array.length)]}`);
    console.log(`Second run: ${array[Math.floor(Math.random() * array.length)]}`);
}

//1.3. Create a data structure to represent a list of quizzes, each quiz contains a question, 4 choices and rightChoice. Create it then ask your mentor to review your data before moving to the next exercise//

let listQuestion = [
    {
        question: "Which fictional detective lived at 221b Baker Street?",
        listAnswer: ['Watson', 'Sam Spade', 'Scubidu', 'Sherlock Holmes'],
        answerCorrect: 4
    },
    {
        question: "How many legs do an optopus has?",
        listAnswer: ['4 legs', 'no legs', '8 legs', '2 legs'],
        answerCorrect: 4
    },
    {
        question: "Which country is home to the kangaroo?",
        listAnswer: ['Australia', 'Autria', 'New Zealand', 'US'],
        answerCorrect: 1
    },
    {
        question: "What sweet food made by bees using nectar from flowers?",
        listAnswer: ['Bread', 'Honey', 'Sugar', 'Potent'],
        answerCorrect: 2
    }
]


//1.4. Write a script to randomly select a quiz from the list above, show them to users//

let ques;

function ex14() {
    let posRan = Math.floor(Math.random() * listQuestion.length);
    ques = listQuestion[posRan];
    let res = ques.question;
    for (let i in ques.listAnswer) {
        res += `\n${Number(i) + 1}. ${ques.listAnswer[i]}`;
    }
    let ans = Number(prompt(res));
    return ans;
}

//1.5. Let users answer then let them know whether they are correct//

function ex15() {
    let ans = ex14();
    if (ans == ques.answerCorrect) {
        alert("That's correct!");
    }
    else {
        alert("Not correct!");
    }
}


//1.6. Let it run continuously, make sure each question only appears once, if the questions has run out, let users know (note that the result showing to users are omitted in the figure below)//

function ex16() {
    let questionAnswer = {};
    let countQuestion = listQuestion.length;
    let countQuestionAnswer = 0;
    let countCorrect = 0;
    while (countQuestionAnswer != countQuestion) {
        let posRan = Math.floor(Math.random() * listQuestion.length);
        if (!questionAnswer[posRan]) {
            questionAnswer[posRan] = 1;
            countQuestionAnswer++;
            ques = listQuestion[posRan];
            let res = ques.question;
            for (let i in ques.listAnswer) {
                res += `\n${Number(i) + 1}. ${ques.listAnswer[i]}`;
            }
            let ans = Number(prompt(res));
            if (ans == ques.answerCorrect) {
                countCorrect++;
            }
        }
    }
    alert("We are out of question!");
    return countCorrect;
}

//1.7. Calculate the total points of users//

function ex17(){
    let countCorrect = ex16();
    alert(`You answered correctly ${countCorrect} out of ${listQuestion.length} questions.`)
}

//1.8. Shuffle the choices each time you show users the quiz//

function ex18(){
    for(let i in listQuestion){
        for(let j = listQuestion[i].listAnswer.length-1; j!=0; --j){
            let ranIndex = Math.floor(Math.random() * (j+1));
            [listQuestion[i].listAnswer[j], listQuestion[i].listAnswer[ranIndex]] = [listQuestion[i].listAnswer[ranIndex], listQuestion[i].listAnswer[j]];
            if(ranIndex+1 == listQuestion[i].answerCorrect){
                listQuestion[i].answerCorrect = j+1;
            }
            else if(j+1 == listQuestion[i].answerCorrect){
                listQuestion[i].answerCorrect = ranIndex +1;
            }
        }
    }
    ex17();
}

/*2.1. Here are the following list of words
[‘to’, ‘be’, ‘that’, ‘of’, ‘elon’, ‘to’, ‘this’, ‘now’, ‘back’, ‘cool’, ‘hey’, ‘love’, ‘of’, ‘life’, ‘that’, ‘rain’, ‘summer’, ‘color’, ‘now’, ‘of’, ‘hat’, ‘late’, ‘sorry’, ‘my’, ‘team’]
Write a program to count the occurrences of the words */

function ex21(){
    console.clear();
    let listWords = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
    let countWord = {};
    for(let x of listWords){
        if(countWord[x]){
            countWord[x] ++;
        }
        else{
            countWord[x] = 1;
        }
    }
    for(let x in countWord){
        console.log(`${x}: ${countWord[x]}`);
    }
}

//2.2. Create and array to store a list of laptops in inventory, the data is as follow//

const inventory = [
    {
        name: 'HP Envy 13aq',
        price: 21000,
        brand: 'HP',
        quantity: 5,
    },
    {
        name: 'Dell XPS 9370',
        price: 30000,
        brand: 'Dell',
        quantity: 1,
    },
    {
        name: 'Dell Inspiron 3567',
        price: 9300,
        brand: 'Dell',
        quantity: 12,
    },
    {
        name: 'Dell Latitude E5450',
        price: 8600,
        brand: 'Dell',
        quantity: 2,
    },

    {
        name: 'Asus Zenbook',
        brand: 'Asus',
        price: 20000,
        quantity: 4,
    },
    {
        name: 'HP Pavilion',
        brand: 'HP',
        price: 14000,
        quantity: 7,
    }]

//2.3. The above data is good to deal with all of the laptops equally, but when it comes to grouping the items by brand, it should be reshaped as below. Write a program to do the reshaping from inventory, from now, use the reshaped data to process//

let inventoryByBrand = {};
for(let x of inventory){
    let brand = x.brand.toLowerCase()
    if(!inventoryByBrand[brand]){
        inventoryByBrand[brand] = [];
        inventoryByBrand[brand].push(x);
    }
    else{
        inventoryByBrand[brand].push(x);
    }
}

function ex23(){
    console.clear();
    console.log(inventoryByBrand);
}

//2.4. From inventoryByBrand, write a program to count the generations of a certain brand in the inventory//


function ex24(){
    let brand = prompt("Which brand?");
    brand = brand.toLowerCase();
    if(inventoryByBrand[brand]){
        alert(`There are ${inventoryByBrand[brand].length} generations of '${brand.toUpperCase()}' in inventory`);
    }
    else{
        alert(`There are 0 generations of '${brand.toUpperCase()}' in inventory`)
    }
}

//2.5. Add more details in the statistics//

function ex25(){
    let brand = prompt("Which brand?");
    brand = brand.toLowerCase();
    if(inventoryByBrand[brand]){
        let ger = "";
        for(let x of inventoryByBrand[brand]){
            ger += x.name + `\n`;
        }
        alert(`There are ${inventoryByBrand[brand].length} generations of '${brand.toUpperCase()}' in inventory:\n${ger}`);
    }
    else{
        alert(`There are 0 generations of '${brand.toUpperCase()}' in inventory`)
    }
}

//2.6. Add more++ details in the statistics (30000 + 9300 * 12 + 8600 * 2 => 158800)//

function ex26(){
    let brand = prompt("Which brand?");
    brand = brand.toLowerCase();
    if(inventoryByBrand[brand]){
        let ger = "";
        let details = 0;
        for(let x of inventoryByBrand[brand]){
            ger += x.name + `\n`;
            details += x.quantity * x.price;
        }
        alert(`There are ${inventoryByBrand[brand].length} generations of '${brand.toUpperCase()}' in inventory:\n\n${ger}\nWith total value: ${details}K`);
    }
    else{
        alert(`There are 0 generations of '${brand.toUpperCase()}' in inventory`)
    }
}

//2.7. Better concurrency display Google 'JS toLocaleString'//


function ex27(){
    let brand = prompt("Which brand?");
    brand = brand.toLowerCase();
    if(inventoryByBrand[brand]){
        let ger = "";
        let details = 0;
        for(let x of inventoryByBrand[brand]){
            ger += x.name + `\n`;
            details += x.quantity * x.price;
        }
        details = details * 1000;
        alert(`There are ${inventoryByBrand[brand].length} generations of '${brand.toUpperCase()}' in inventory:\n\n${ger}\nWith total value: ${details.toLocaleString("da-DK")}VND`);
    }
    else{
        alert(`There are 0 generations of '${brand.toUpperCase()}' in inventory`)
    }
}