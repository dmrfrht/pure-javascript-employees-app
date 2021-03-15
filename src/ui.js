export class UI {
  constructor() {
    this.inputName = document.querySelector("#name")
    this.inputDepartmen = document.querySelector("#department")
    this.inputSalary = document.querySelector("#salary")
    this.employeeList = document.querySelector("#employees")
    this.updateEmployeeBtn = document.querySelector("#update")
  }

  addAllEmployee(employees) {
    let result = ""
    employees.forEach(element => {
      result += `
      <tr>
        <td>${element.name}</td>
        <td>${element.department}</td>
        <td>${element.salary}</td>
        <td>${element.id}</td>
        <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
        <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
      </tr>
      `
    });

    this.employeeList.innerHTML = result
  }
}