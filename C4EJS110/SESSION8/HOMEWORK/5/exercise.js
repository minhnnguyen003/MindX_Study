// init data answer
let listAnswer = [];
let ans;
let res;
let sum;
for (let i = 0; i < 100; ++i) {
    let firstRandom = Math.floor(Math.random() * 10);
    let secondRandom = Math.floor(Math.random() * 10);
    if (i % 2) {
        do{
            sum = Math.floor(Math.random() * 10 + 10);
            if(firstRandom + secondRandom != sum) break;
        }while(1);
        ans = `${firstRandom}  +  ${secondRandom} = ${sum}`;
        res = false;
        listAnswer.push({
            answer: ans,
            result: res
        });
    }
    else{
        ans = `${firstRandom}  +  ${secondRandom} = ${firstRandom+secondRandom}`;
        res = true;
        listAnswer.push({
            answer: ans,
            result: res
        });
    }
}

function indexRan(){
    return Math.floor(Math.random() * 100);
}

let countCorrect = 0;
let scoreCorrect = document.getElementById("scoreCorrect");
scoreCorrect.textContent = countCorrect;

let answer = document.getElementById("answer");

let index =  indexRan();
answer.textContent = listAnswer[index].answer;

//event form

let scoreSet = document.getElementById("checkScore");
let timerSet = document.getElementById("checkTimer");

//set time
let time = document.getElementById("time");
function setTime(){
    if(timerSet.checked){
        time.style.transitionDuration = "0ms";
        time.style.width = "96%";
        setTimeout(() => {
            time.style.transitionDuration = "2950ms";
            time.style.width = "0%";
        }, 50);
    }
}

//event tick or cross

let tick = document.getElementById("tick");
let cross = document.getElementById("cross");

tick.addEventListener('click', () => {
    setTime();
    if(scoreSet.checked){
        if(listAnswer[index].result){
            scoreCorrect.textContent = ++countCorrect;
        }
        else if(countCorrect>0){
            scoreCorrect.textContent = --countCorrect;
        }
    }
    index =  indexRan();
    answer.textContent = listAnswer[index].answer;
})

cross.addEventListener('click', () => {
    setTime();
    if(scoreSet.checked){
        if(!listAnswer[index].result){
            scoreCorrect.textContent = ++countCorrect;
        }
        else if(countCorrect>0){
            scoreCorrect.textContent = --countCorrect;
        }
    }
    index =  indexRan();
    answer.textContent = listAnswer[index].answer;
})