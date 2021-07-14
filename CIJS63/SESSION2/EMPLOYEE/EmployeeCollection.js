import Employee from "./Employee.js";

class EmployeeCollection {
    constructor(id, name, owner){
        this._id = id;
        this._name = name;
        this._owner = owner;
        this._employees = [];
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get owner() {
        return this._owner;
    }

    set owner(owner) {
        this._owner = owner;
    }

    get employees() {
        return this._employees;
    }

    set employees(employees) {
        this._employees = employees;
    }

    add(employee) {
        if(employee instanceof Employee){
            this._employees.push(employee);
        }
    }

    update(id, data) {
        const index = this._employees.findIndex((value) => {
            return value.id == id;
        });
        this._employees[index].update(data);
    }

    delete(id) {
        const index = this._employees.findIndex((value) => {
            return value.id == id;
        });
        this._employees.splice(index, 1);
    }

    show() {
        let stringProfile = "";
        this._employees.forEach((data) => {
            stringProfile += data.show();
        })
        return stringProfile;
    }
}

export default EmployeeCollection;