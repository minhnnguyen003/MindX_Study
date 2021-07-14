//1

function ex1(){
    console.clear();
    const container = document.getElementById('list');
    for(let i=0; i<3; ++i){
        container.insertAdjacentHTML('afterend', `<li>${i}</li>`);
    }
    console.log(container);
    console.log('1-d, 2-a, 3-c, 4-b')
}

//2

function ex2(){
    console.clear();
    setInterval(() => {console.log('Heehaw');}, 1000);
}

//3

function ex3(){
    console.clear();
   console.log("Can a variable declared by let, in a function still exists after the function finishes running?");
   console.log('No');
   console.log("Can var variable declared by var, in a function still exists after the function finishes running?");
   console.log('No');
}

//4

function ex4(){
    console.clear();
    const listLi = document.getElementsByTagName('li');
    console.log(listLi[1]);
    for(let i=0; i < listLi.length; ++i){
        console.log(listLi[i]);
    }
}

//5

function ex5(){
    console.clear();
    const listClass = document.getElementsByClassName("singer");
    console.log(listClass[1]);
    for(let x of listClass){
        console.log(x);
    }
}

//6

function ex6(){
    const div = document.getElementById('remove');
    div.remove();
}

//7.1

function ex71(){
    console.clear();
    document.getElementById("button1").addEventListener('click', (e) => {
        console.log(e.target);
    });
    document.getElementById("button2").addEventListener('click', (e) => {
        console.log(e.target);
    });
}

//7.2

function ex72(){
    console.clear();
    document.getElementById("input").addEventListener('keydown', (e) =>{
        console.log(e.key);
    })
}

//8

function ex8(){
    alert("Tôi là Dũng \nTôi có ước mơ kiếm được việc làm IT trong năm nay.");
}

//9

function nameWish1(name,wish){
    alert(`${name}\n${wish}`);
}

function ex9(){
    nameWish1('Tôi là Dũng','Tôi có ước mơ kiếm được việc làm IT trong năm nay.');
}

//10

function nameWish2(name,wish){
    wish = (typeof wish != 'undefined') ? wish : "";
    alert(`${name}\n${wish}`);
}

function ex10(){
    nameWish2('Tôi là Dũng');
}

//11

function ex11(){
    console.clear();

    //11.2
    const upper = document.getElementById("upper_btn");
    console.log(upper);

    //11.3
    upper.addEventListener('click', () => {
        console.log("Upper it!!! just clicked");
    });
    
    //11.4
    const inputName = document.getElementById("name_input");
    console.log(inputName);

    //11.5
    let name = '';
    inputName.addEventListener('input', (e) => {
        name = e.target.value;
    });
    upper.addEventListener('click', () => {
        console.log(`User's name: ${name}`);
    });
    
    //11.6
    upper.addEventListener('click', () => {
        console.log(`User's name uppercase: ${name.toUpperCase()}`);
    });
    
    //11.7
    const result = document.getElementById("result_div");
    console.log(result);

    //11.8
    upper.addEventListener('click', () => {
        result.textContent  = name.toUpperCase();
    });
}