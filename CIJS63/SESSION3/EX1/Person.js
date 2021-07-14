class Person {
    constructor(name, age, gender, create_at){
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._create_at = create_at;
    }

    get name(){
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get age(){
        return this._age;
    }

    set age(age) {
        this._age = age;
    }

    get gender(){
        return this._gender;
    }

    set gender(gender) {
        this._gender = gender;
    }
    
    get create_at(){
        return this._create_at;
    }

    set create_at(create_at) {
        this._create_at = create_at;
    }
}

export default Person;