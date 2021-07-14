import {getDate} from "./getSet.js";

class Employee{
    constructor(id, name, image, create_at){
        this._id = id;
        this._name = name;
        this._image = image;
        this._create_at = create_at;
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

    get image() {
        return this._image;
    }

    set image(image) {
        this._image = image;
    }

    get create_at() {
        return this._create_at;
    }

    set create_at(create_at) {
        this._create_at = create_at;
    }

    show() {
        return `
        <li class="profile_staff content_profile" id="${this._id}">
            <div class="profile_img">
                <i class="fa fa-close" onclick="import('./processEmployee.js').then(e => e.deleteEmployee('${this._id}'))"></i>
                <img id="image_${this._id}" src="${this._image}">
            </div><hr>
            <div class="staff_id">ID: ${this._id}</div><hr>
            <div id="name_${this._id}" class="staff_name">${this._name}</div><hr>
            <div class="staff_create">Ngày thêm: ${getDate()}</div>
        </li>`;
    }

    update(data) {
        if(data) {
            if(data.name) {
                this._name = data.name;
            }
            if(data.image) {
                this._image = data.image;
            }
        }
    }
}

export default Employee;