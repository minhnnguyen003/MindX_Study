import Employee from "./Employee.js";
import "./custom-card.js";
import "./custom-add.js";
import "./custom-update.js";

//getData

firebase.firestore().collection("employees").get()
.then((res) => {
    let stringData = "";
    const listEmployee = res.docs.sort((a,b) => a.data().create - b.data().create);
    listEmployee.forEach((doc) => {
        const data = doc.data();
        const employee = new Employee(doc.id ,data.name, data.age, data.image, data.create);
        stringData += employee.show();
    })
    document.getElementById("employee_content").innerHTML = stringData;
})

