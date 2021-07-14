// init database

export const listDatabase = [];


const getDatabase = async () => {
    const response = await firebase.firestore().collection('questions').get();
    response.docs.forEach((doc) => {
        listDatabase.push(doc.data());
    });
}

getDatabase();

export const initQuestion = (sumQuestion, mode) => {
    const listQuestion = [];
    const sumQues = [];
    const subQues = [];
    const mulQues = [];
    const divQues = [];
    listDatabase.forEach((data) => {
        switch(data.type) {
            case 'add':
                sumQues.push(data);
                break;
            case 'sub':
                subQues.push(data);
                break;
            case 'mul':
                mulQues.push(data);
                break;
            default:
                divQues.push(data);
        }
    })
    let index;
    let sumtype;
    if(mode == 'easy') {
        sumtype = sumQuestion / 2;
        for(let i = 0; i< sumtype; ++i){
            index = Math.floor(Math.random() * sumQues.length);
            listQuestion.push(sumQues[index]);
            index = Math.floor(Math.random() * subQues.length);
            listQuestion.push(subQues[index]);
        }
    }
    else if(mode == 'medium') {
        sumtype = sumQuestion / 3;
        for(let i = 0; i < sumtype; ++i){
            index = Math.floor(Math.random() * sumQues.length);
            listQuestion.push(sumQues[index]);
            index = Math.floor(Math.random() * subQues.length);
            listQuestion.push(subQues[index]);
            index = Math.floor(Math.random() * mulQues.length);
            listQuestion.push(mulQues[index]);
        }
        let div = sumQuestion % 3;
        for(let i = 0; i < div; ++i) {
            index = Math.floor(Math.random() * mulQues.length);
            listQuestion.push(mulQues[index]);
        }
    }
    else if(mode == 'hard') {
        sumtype = sumQuestion / 4;
        for(let i = 0; i<5; ++i){
            index = Math.floor(Math.random() * sumQues.length);
            listQuestion.push(sumQues[index]);
            index = Math.floor(Math.random() * subQues.length);
            listQuestion.push(subQues[index]);
            index = Math.floor(Math.random() * mulQues.length);
            listQuestion.push(mulQues[index]);
            index = Math.floor(Math.random() * divQues.length);
            listQuestion.push(divQues[index]);
        }
        let div = sumQuestion % 4;
        for(let i = 0; i < div; ++i) {
            index = Math.floor(Math.random() * divQues.length);
            listQuestion.push(divQues[index]);
        }
    }
    return mixArray(listQuestion);
}

const mixArray = (array) => {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}