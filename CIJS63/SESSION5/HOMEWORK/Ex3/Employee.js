import { changeTime } from "./utils.js";

class Employee {
    constructor(id, name, age, image, create) {
        this._id = id;
        this._name = name;
        this._age = age;
        this._image = image;
        this._create = create;
    }

    get id(){
        return this._id;
    }

    set id(val){
        this._id = val;
    }

    get name(){
        return this._name;
    }

    set name(val){
        this._name = val;
    }

    get age(){
        return this._age;
    }

    set age(val){
        this._age = val;
    }

    get image(){
        return this._image;
    }

    set image(val){
        this._image = val;
    }

    get create(){
        return this._create;
    }

    set create(val){
        this._create = val;
    }

    show() {
        return `<custom-card id="${this._id}" name="${this._name}" age="${this._age}" image="${this._image}" create="${changeTime(this._create)}"></custom-card>`;
    }
}

export default Employee;