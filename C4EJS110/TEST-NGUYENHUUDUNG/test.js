// A Problem Solving
// A1

function findOppositeNumber(n, inputNumber){
    if(inputNumber >= n) {
        console.log(`inputNumber phải nằm trong khoảng từ 0 đến n-1`);
    }
    else if(n%2 ==0 && n >= 4 && n <= 20){
        let oppositeNumber;
        if(inputNumber >= n/2){
            oppositeNumber = inputNumber - n/2;
        }
        else{
            oppositeNumber = inputNumber + n/2;
        }
        console.log(oppositeNumber);
    }
    else{
        console.log(`n phải là số nguyên dương chẵn nằm trong khoảng từ 4 đến 20!`);
    }
}

// findOppositeNumber(10, 2);
// findOppositeNumber(10, 6);
// findOppositeNumber(10, 11);
// findOppositeNumber(2, 0);
// findOppositeNumber(7, 0);
// findOppositeNumber(22, 0);


// A2

function merge2String(string1, string2){
    if(string1 == null) {
        console.log(string2);
    }
    else if(string2 == null){
        console.log(string1);
    }
    else{
        let mergeString = "";
        let lengthFor = string1.length < string2.length ? string1.length : string2.length;
        for(let i=0; i < lengthFor; ++i){
            mergeString += string1[i] + string2[i];
        }
        if(lengthFor == string1.length) {
            for(let i=lengthFor; i< string2.length; ++i){
                mergeString += string2[i];
            }
        }
        else{
            for(let i=lengthFor; i< string1.length; ++i){
                mergeString += string1[i];
            }
        }
        console.log(mergeString);
    }
}

merge2String("abc", "123");
merge2String("abc", "0123");
merge2String("abcd", "123");
merge2String("", "123");
merge2String("abc", "");
merge2String("abc", "123456789");
merge2String("12345", "abc");
merge2String("abcde", "12345678910");



//B Code Challenge

let numberLucky = 9;
let countPlay = 3;

let numberInput = document.getElementById("numberLucky");
let buttonPlay = document.getElementById("play");
buttonPlay.addEventListener('click', clickPlay);

function clickPlay(){
    if(countPlay == 0){
        alert(`Bạn đã hết lượt dự đoán!`);
        numberInput.value = "";
    }
    else if (numberInput.value < 1 || numberInput.value > 10){
        alert(`Con số dự đoán phải nằm trong khoảng từ 1 đến 10!\nMời bạn nhập lại!\nBạn còn ${countPlay} lượt đoán!`);
        numberInput.value = "";
    }
    else{
        countPlay--;
        let result = "";
        if(numberInput.value == numberLucky) {
            result += "Chúc mừng bạn đã chọn đúng số!";
        }
        else{
            result += `Rất tiếc! Bạn đã chọn sai số đã dự đoán!\nBạn còn ${countPlay} lượt đoán!\nChúc bạn may mắn!`;
        }
        numberInput.value = "";
        alert(result);
    }
}
