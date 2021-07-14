import {initQuestion} from "./utils.js";

export class Game {
    constructor(sumQuestion, timeAnswer, scoreCount, scoreSetting, timeSetting, mode){
        this._scoreCount = scoreCount;  // điểm cộng trừ
        this._sumQuestion = sumQuestion;   // tổng số câu hỏi
        this._timeAnswer = timeAnswer;  // thời gian trả lời
        this._scoreSetting = scoreSetting; // chế độ tính điểm
        this._timeSetting = timeSetting; // chế độ thời gian
        this._mode = mode;  // chế độ chơi
        this._countCorrect = 0;  // số câu đúng
        this._listQuestion = initQuestion(sumQuestion, mode);  // danh sách câu hỏi
        this._timeOut = false;
    }

    get scoreCount() {
        return this._scoreCount;
    }

    get sumQuestion() {
        return this._sumQuestion;
    }

    get timeAnswer() {
        return this._timeAnswer;
    }

    get scoreSetting() {
        return this._scoreSetting;
    }

    get timeSetting() {
        return this._timeSetting;
    }

    get mode() {
        return this._mode;
    }

    get countCorrect() {
        return this._countCorrect;
    }

    get listQuestion() {
        return this._listQuestion;
    }

    get timeOut() {
        return this._timeOut;
    }

    clock() {
        this._timeAnswer--;
    }

    outClock() {
        this._timeOut = true;
    }
    
    correct() {
        this._countCorrect++;
    }

    notCorrect() {
        this._countCorrect--;
    }

    getScore() {
        if(this._countCorrect <= 0) return 0;
        else return this._countCorrect * this._scoreCount;
    }
}
