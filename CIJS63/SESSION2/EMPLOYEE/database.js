import Employee from "./Employee.js";
import EmployeeCollection from "./EmployeeCollection.js";
import {getDate} from "./getSet.js";

const listGroup = {};
listGroup["G1"] = new EmployeeCollection("G1", "DEV", "Nguyuyễn Hữu Dũng");
listGroup["G1"].add(new Employee("G1-1", "Nguyễn A", "https://i0.wp.com/s1.uphinh.org/2021/05/31/default-profile-icon-26-2.jpg", getDate()));
listGroup["G1"].add(new Employee("G1-2", "Nguyễn B", "https://i0.wp.com/s1.uphinh.org/2021/05/31/default-profile-icon-26-2.jpg", getDate()));
listGroup["G2"] = new EmployeeCollection("G2", "KNM", "Vũ Thùy Dung");
listGroup["G2"].add(new Employee("G2-1", "Vũ Dung", "https://i0.wp.com/s1.uphinh.org/2021/05/31/default-profile-icon-26-3.jpg", getDate()));
listGroup["G2"].add(new Employee("G2-2", "Trần Kim", "https://i0.wp.com/s1.uphinh.org/2021/05/31/default-profile-icon-26-2.jpg", getDate()));

export default listGroup;