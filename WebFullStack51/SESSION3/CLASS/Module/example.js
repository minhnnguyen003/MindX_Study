// export variable

const authorCopyRight = 'Nguyen Huu Dung';

// export function

const sum = (a, b) => {
    return a + b;
}

// export class

class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    showInfoAuthor() {
        console.log('name: ', this.name, 'age: ', this.age);
    }
}

module.exports = {authorCopyRight, sum, Person};